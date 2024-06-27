import useIcon from "../hooks/useIcon"
import * as S from '../styles/Spinner.styled'
import { useSpinner } from "../utils/SpinnerContext"

const Spinner = () => {
    const { isSpinnerOpen } = useSpinner()
    const { IcSpinner } = useIcon()

    if (!isSpinnerOpen) return null

	return (
        <S.Spinner>
            <IcSpinner/>
        </S.Spinner>
	)
}

export default Spinner