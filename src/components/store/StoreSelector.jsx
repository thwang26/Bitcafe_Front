import { useState } from "react"
import useIcon from "../../hooks/useIcon"
import { palette, icon, typography } from "../../constants/Styles"
import * as S from "../../styles/store/StoreSelector.styled"
import StoreModal from "./StoreModal"
import { useRecoilValue } from "recoil"
import { storeState } from "../../utils/RecoilState"

const StoreSelector = () => {
    const { IcDownArrow } = useIcon()
    const [isStoreModalOpen, setIsStoreModalOpen] = useState(false)
    const store = useRecoilValue(storeState)

    return (
        <>
            <S.SelectorWrapper onClick={() => setIsStoreModalOpen(true)}>
                <S.SelectedStoreWrapper>
                    <S.SelectedStore>
                        {store}
                    </S.SelectedStore>
                    <IcDownArrow size={icon.header} color={palette.white} />
                </S.SelectedStoreWrapper>
            </S.SelectorWrapper>
            {isStoreModalOpen && (
                <StoreModal
                    setIsStoreModalOpen={setIsStoreModalOpen}
                />
            )}
        </>
    )
}

export default StoreSelector