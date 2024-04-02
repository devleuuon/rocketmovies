import { Container } from "./styles";
import { FiPlus } from 'react-icons/fi'
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Button } from "../../components/button";


export function Home() {
    return(
        <Container>
            <Header />
            <div className="header">
            <Section title="Meus Filmes"/>

            <Button icon={FiPlus} title="Adicionar"/>
            </div>
        </Container>
    )
}