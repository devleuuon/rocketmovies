import { Container, Profile } from "./styles";
import { Input } from "../input";

export function Header() {
    return(
        <Container>
            <Profile>
                <h1>RocketMovies</h1>

                <Input 
                placeholder="Pesquisar pelo título"
                />

                <div className="profile">

                    <strong>Lennon Fonseca</strong>
                    <span>Sair</span>
                    </div>

                    <img src="https://github.com/devleuuon.png" alt="foto do usuário" />


            </Profile>
        </Container>
    )
}