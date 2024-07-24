import { Container, Form, Content } from "./styles";
import { Header } from '../../components/header'
import { Back } from '../../components/Back'
import { Section } from '../../components/section'
import { Input } from '../../components/input'
import { NoteItem } from '../../components/noteitem'
import { Button } from '../../components/button'
import { Link } from "react-router-dom";
import { useState } from "react";

export function New() {
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')

    function handleAddTag(){

        if(!newTag){
            alert('Preencha o campo vazio!')
        } else {
            setTags(prevState => [...prevState, newTag])
        }
        setNewTag('')
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag!== deleted))
    }

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
                    {
                        tags.map((tag, index) => (
                            <NoteItem
                            key={String(index)}
                            value={tag}
                            onClick={() => handleRemoveTag(tag) }
                            />
                        ))
                    }

                <NoteItem 
                isNew 
                placeholder="Novo marcador"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
                />
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