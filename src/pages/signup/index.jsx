import { Container, Form, Background } from "./styles";
import { TitleLogin } from '../../components/titlelogin'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Back } from '../../components/Back'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

     function handleSignUp() {
        if(!name || !email || !password) {
            return alert('Preencha todos os campos!')
        }

        api.post('/users', { name, email, password }) //vai cadastrar usuário no banco de dados.
        .then(() => {
            alert('Usuário cadastrado com sucesso!')
            navigate('/rocketmovies/')
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert('Não foi possível cadastrar!')
            }
        })
    }
    
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>

                <p>Aplicação para acompanhar tudo que assistir.</p>

                <TitleLogin title="Crie sua conta" />

                <Input 
                type="text"
                placeholder="Nome"
                icon={FiUser}
                onChange={e => setName(e.target.value)}
                />

                <Input 
                type="email"
                placeholder="E-mail"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                type="password"
                placeholder="Senha"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to="/rocketmovies/">
                <Back title="Voltar para o login" />
                </Link>

            </Form>

            <Background />
        </Container>
    )
}