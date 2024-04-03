import { Container } from "./styles";
import { FiPlus, FiX} from 'react-icons/fi'

export function NoteItem({ isNew, OnClick }) {
    return(
        <Container isNew={isNew}>
            <button
            type="button"
            onClick={OnClick}
            className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <FiPlus /> : <FiX /> }
            </button>
        </Container>
    )
}