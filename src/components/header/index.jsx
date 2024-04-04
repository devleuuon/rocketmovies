import { Container, Profile } from "./styles";
import { Input } from "../input";
import { Link } from "react-router-dom";

export function Header() {
    return(
        <Container>
            <Profile>
                <h1>RocketMovies</h1>

                <Input 
                placeholder="Pesquisar pelo título"
                />

                <div className="profile">

                    <Link to="/rocketmovies/profile">
                    <strong>Lennon Fonseca</strong>
                    </Link>

                    <Link to="#">
                    <span>Sair</span>
                    </Link>
                    </div>

                    <img src="https://github.com/devleuuon.png" alt="foto do usuário" />


            </Profile>
        </Container>
    )
}