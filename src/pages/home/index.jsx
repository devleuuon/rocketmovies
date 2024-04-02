import { Container } from "./styles";
import { Header } from "../../components/header";
import { Section } from "../../components/section";


export function Home() {
    return(
        <Container>
            <Header />
            <Section title="Meus Filmes"/>
        </Container>
    )
}