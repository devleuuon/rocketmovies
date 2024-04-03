import { Container } from "./styles";
import {FiArrowLeft } from 'react-icons/fi'

export function Back({ title }) {
    return(
        <Container>
            <FiArrowLeft />
            <button>{title}</button>
        </Container>
    )
}