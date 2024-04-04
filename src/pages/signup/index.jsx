import { Container, Form, Background } from "./styles";
import { TitleLogin } from '../../components/titlelogin'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Back } from '../../components/Back'
import { Link } from "react-router-dom";

export function SignUp() {
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
                />

                <Input 
                type="email"
                placeholder="E-mail"
                icon={FiMail}
                />

                <Input 
                type="password"
                placeholder="Senha"
                icon={FiLock}
                />

                <Button title="Cadastrar"/>

                <Link to="/rocketmovies/">
                <Back title="Voltar para o login" />
                </Link>

            </Form>

            <Background />
        </Container>
    )
}