import { Container } from "./styles";

export function Button({title, loading = false, ...rest}) {
    return(
    <Container {...rest}>
        <button 
        type="button"
        disabled={loading}>
            { loading ? 'Carregando...' : title }
        </button>
    </Container>
    )
}