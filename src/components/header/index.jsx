import { Container, Profile } from "./styles";
import { Input } from "../input";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Header() {
    const { signOut } = useAuth()
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

                    <Link onClick={signOut} to="#">
                    <span>Sair</span>
                    </Link>
                    </div>

                    <img src="https://github.com/devleuuon.png" alt="foto do usuário" />


            </Profile>
        </Container>
    )
}