import { Back } from "../../components/Back";
import { Container, Avatar, Form } from "./styles";
import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Input } from "../../components/input";
import { Button } from '../../components/button';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Profile() {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        await updateProfile({ user })
    }

    return(
        <Container>
            <header>
                <Link to="/rocketmovies/">
                <Back title="Voltar" />
                </Link>
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
            onChange={e => setName(e.target.value)}
            />

            <Input 
            type="email"
            placeholder="lennonfonsecaa@gmail.com"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
            />

            <Input 
            type="password"
            placeholder="Senha Atual"
            icon={FiLock}
            onChange={e => setPasswordOld(e.target.value)}
            />

            <Input 
            type="text"
            placeholder="Nova Senha"
            icon={FiLock}
            onChange={e => setPasswordNew(e.target.value)}
            />

            <Button title="Salvar" onClick={handleUpdate} />

            </Form>

        </Container>
    )
}