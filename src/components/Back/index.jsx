import { Container } from "./styles";
import {FiArrowLeft } from 'react-icons/fi'

export function Back() {
    return(
        <Container>
            <FiArrowLeft />
            <button>Voltar</button>
        </Container>
    )
}