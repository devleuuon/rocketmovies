import { Back } from "../../components/Back";
import { Container, Avatar, Form } from "./styles";
import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Input } from "../../components/input";
import { Button } from '../../components/button';

export function Profile() {
    return(
        <Container>
            <header>
                <Back title="Voltar" />
            </header>

            <Form>
            <Avatar>
                <img src="https://github.com/devleuuon.png" alt="foto do usuário" />

                <label htmlFor="avatar">
                    <FiCamera />
                    <input type="file" id="avatar" />
                </label>
            </Avatar>

            <Input 
            type="text"
            placeholder="Lennon Fonseca"
            icon={FiUser}
            />

            <Input 
            type="email"
            placeholder="lennonfonsecaa@gmail.com"
            icon={FiMail}
            />

            <Input 
            type="password"
            placeholder="Senha Atual"
            icon={FiLock}
            />

            <Input 
            type="text"
            placeholder="Nova Senha"
            icon={FiLock}
            />

            <Button title="Salvar" />

            </Form>

        </Container>
    )
}