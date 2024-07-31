import { Container, Content } from "./styles";
import { FiPlus } from 'react-icons/fi'
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Button } from "../../components/button";
import { CardMovie } from "../../components/card";


export function Home() {

    return(
        <Container>
            <Header />
            
            <Content>
            <div className="header">
            <Section title="Meus Filmes"/>


            
            <Button to="/rocketmovies/new"
            icon={FiPlus}
            title="Adicionar filmes"
            />

            </div>

            <CardMovie />
            </Content>
        </Container>
    )
}