import { Container } from "./styles";

export function User({ name, ...rest }) {
    return(
        <Container {...rest}>
            <p>{ name }</p>
        </Container>
    )
}