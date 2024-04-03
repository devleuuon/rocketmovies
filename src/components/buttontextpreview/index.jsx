import { Container } from "./styles";

export function ButtonTextPreview({ title, ...rest}) {
    return(
        <Container type="button" {...rest}>
            {title}
        </Container>
    )
}