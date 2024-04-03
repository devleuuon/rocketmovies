import { Container } from "./styles";
import { IoStarSharp, IoStarOutline } from 'react-icons/io5'

export function Stars() {
    return(
        <Container>
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarOutline />
        </Container>
    )
}