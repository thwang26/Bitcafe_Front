import { useRef, useState } from 'react'
import * as S from '../../styles/store/StoreModal.styled'
import useIcon from '../../hooks/useIcon'
import { palette, icon } from '../../constants/Styles'
import { useEffect } from 'react'
import axiosInstance from '../../utils/FetchCall'
import { formatDistance, useGeoLocation } from '../../utils/Utils'
import DefaultModal from '../DefaultModal'
import { useSetRecoilState } from 'recoil'
import { storeIdState, storeState } from '../../utils/RecoilState'

const StoreModal = ({ 
    setIsStoreModalOpen
}) => {
    const { IcExit } = useIcon()
    const [isOpen, setIsOpen] = useState(true)
    const timerRef = useRef(null);
    const [storeList, setStoreList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { location, error } = useGeoLocation()
    const [isDefaultModalOpen, setIsDefaultModalOpen] = useState(false)
    const [selectedStoreId, setSelectedStoreId] = useState()
    const [selectedStoreName, setSelectedStoreName] = useState()
    const setStore = useSetRecoilState(storeState)
    const setStoreId = useSetRecoilState(storeIdState)

    useEffect(() => {
        if (!isOpen) {
            timerRef.current = setTimeout(() => setIsStoreModalOpen(false), 300)
        }

        return () => clearTimeout(timerRef.current)
    }, [isOpen])

    useEffect(() => {
        if (location) {
            getStoreList()
        }
    }, [location])

    useEffect(() => {
        if (storeList.length > 0) {
            setIsLoading(true)
        }
    }, [storeList])

    const getStoreList = async () => {
        try {
            const res = await axiosInstance.get(`/api/store/store-list?lat=${location.latitude}&lng=${location.longitude}`, {})
            if (res.status === 200) {
                setStoreList(res.data)
            }
        } catch (error) {
            console.log(error.response)
        }
    }

    const selectStore = () => {
        setStore(selectedStoreName)
        setStoreId(selectedStoreId)
        setIsDefaultModalOpen(false)
        setIsOpen(false)
    }

    const handleStoreClick = (storeName, storeId) => {
        setSelectedStoreName(storeName)
        setSelectedStoreId(storeId)
        setIsDefaultModalOpen(true)
    }


    return (
        <>
            <S.Container open={isOpen}>
                <S.ModalWrapper open={isOpen}>
                    <S.WrapIcon onClick={() => { setIsOpen(false) }}>
                        <IcExit size={icon.modal} color={palette.icon} />
                    </S.WrapIcon>
                    {isLoading && (
                        <>
                            {storeList.map((item) => (
                                <S.StoreItem key={item.id} onClick={() => {
                                    handleStoreClick(item.storeName, item.id)
                                }}>
                                    <S.StoreImage src={item.imagePath} />
                                    <S.StoreContext>
                                        <S.StoreName>{item.storeName}</S.StoreName>
                                        <S.StoreAddress>{item.storeAddr}</S.StoreAddress>
                                        <S.StoreDistance>{formatDistance(item.distance)}</S.StoreDistance>
                                    </S.StoreContext>
                                </S.StoreItem>
                            ))}
                            {isDefaultModalOpen && (
                                <DefaultModal
                                    content={`${selectedStoreName} 매장을 선택할까요?`}
                                    setIsDefaultModalOpen={setIsDefaultModalOpen}
                                    modalEvent={selectStore}
                                />
                            )}
                        </>
                    )}
                </S.ModalWrapper>
            </S.Container>
        </>
    )
}

export default StoreModal