import { Container, Form, Background } from "./styles";
import { TitleLogin } from '../../components/titlelogin'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { FiMail, FiLock} from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { SignIn } = useAuth()

    function handleSignIn(){ //essa função vai para o botão de entrar.
        SignIn({ email, password })
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <TitleLogin title="Faça seu login" />

                <Input
                type="email"
                icon={FiMail}
                placeholder="E-mail"
                onChange={e => setEmail(e.target.value)}
                />

                <Input
                type="password"
                icon={FiLock}
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn}/>


                <Link to="/rocketmovies/signup">Criar Conta</Link>
                
            </Form>

            <Background />
        </Container>
    )
}