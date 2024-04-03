import { Container } from "./styles";

export function Button({title, icon: Icon, loading = false, ...rest}) {
    return(
    <Container {...rest}>
        <button 
        type="button"
        disabled={loading}>
            {Icon && <Icon size="18" />}
            { loading ? 'Carregando...' : title }
        </button>
    </Container>
    )
}