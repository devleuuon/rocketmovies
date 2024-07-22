import { Container, Profile } from "./styles";
import { Input } from "../input";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Header() {
    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return(
        <Container>
            <Profile>
                <h1>RocketMovies</h1>

                <Input 
                placeholder="Pesquisar pelo título"
                />

                <div className="profile">

                    <Link to="/rocketmovies/profile">
                    <strong>{user.name}</strong>
                    </Link>

                    <Link onClick={signOut} to="#">
                    <span>Sair</span>
                    </Link>
                    </div>
                    <Link to="/rocketmovies/profile">
                    <img className="image" src={avatarUrl} alt="foto do usuário" />
                    </Link>


            </Profile>
        </Container>
    )
}