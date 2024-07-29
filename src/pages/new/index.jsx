import { Container, Form, Content } from "./styles";
import { Header } from '../../components/header'
import { Back } from '../../components/Back'
import { Section } from '../../components/section'
import { Input } from '../../components/input'
import { NoteItem } from '../../components/noteitem'
import { Button } from '../../components/button'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function New() {
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')

    const navigate = useNavigate()

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

    async function handleNewNote() {

        if(!title) {
            return alert('Digite o título da nota!')
        }

        if(!rating) {
            return alert('Avalie o filme!')
        }

        if(rating < 0 || rating > 5) {
            return alert('A avaliação é de 0 a 5.')
        }

        if(newTag){
           return alert('Você deixou uma tag no campo para adicionar, mas não adicionou!')
        }

        await api.post('/movie_notes', {
        title,
        description,
        rating,
        tags
    })

    alert('Filme cadastrado com sucesso!')
    navigate('/rocketmovies/')
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
                onChange={e => setTitle(e.target.value)}
                />

                <Input 
                placeholder="Sua nota (de 0 a 5)"
                type="number"
                onChange={e => setRating(e.target.value)}
                />
                </div>

                <textarea 
                placeholder="Observações" 
                id="textarea"
                onChange={e => setDescription(e.target.value)}
                >

                </textarea>

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

                <Button 
                title="Salvar alterações"
                onClick={handleNewNote} 
                />
                </div>
            </Form>
        </Container>
    )
}