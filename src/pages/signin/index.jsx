import { Container, Form, Background } from "./styles";
import { TitleLogin } from '../../components/titlelogin'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { FiMail, FiLock} from 'react-icons/fi'
import { Link } from "react-router-dom";

export function SignIn() {
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
                />

                <Input
                type="password"
                icon={FiLock}
                placeholder="Senha"
                />

                <Button title="Entrar"/>


                <Link to="/rocketmovies/signup">Criar Conta</Link>
                
            </Form>

            <Background />
        </Container>
    )
}