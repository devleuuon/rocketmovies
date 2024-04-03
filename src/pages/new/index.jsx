import { Container, Content } from "./styles";
import { Header } from '../../components/header'
import { Back } from '../../components/Back'
import { Section } from '../../components/section'
import { Input } from '../../components/input'
import { NoteItem } from '../../components/noteitem'

export function New() {
    return(
        <Container>
            <Header />

            <Content>
                <Back title="Voltar" />

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

            </Content>

                <div className="tags">
                <NoteItem placeholder="React" />
                <NoteItem isNew placeholder="Novo marcador"/>
                </div>
    
        </Container>
    )
}