import { Container, Form, Content } from "./styles";
import { Header } from '../../components/header'
import { Back } from '../../components/Back'
import { Section } from '../../components/section'
import { Input } from '../../components/input'
import { NoteItem } from '../../components/noteitem'
import { Button } from '../../components/button'
import { Link } from "react-router-dom";

export function New() {
    return(
        <Container>
            <Header />

            <Form>
                <Link to="/rocketmovies/">
                <Back title="Voltar" />
                </Link>

                <Section title="Novo filme" />

                <div className="newMovie">
                <Input 
                placeholder="Título"
                type="text"
                />

                <Input 
                placeholder="Sua nota (de 0 a 5)"
                type="number"
                />
                </div>

                <textarea placeholder="Observações" id="textarea"></textarea>

                <h3>Marcadores</h3>

                <Content>

                <div className="tags">
                <NoteItem placeholder="React" />
                <NoteItem isNew placeholder="Novo marcador"/>
                </div>


                </Content>

                <div className="button">

                <button id="button" type="button">Excluir Filme</button>

                <Button title="Salvar alterações" />
                </div>
            </Form>
        </Container>
    )
}