import { Route, Routes } from "react-router-dom";

import { SignIn } from '../pages/signin'
import { SignUp } from '../pages/signup'

export function AuthRoutes() {
    return(
        <Routes>
            <Route path="/rocketmovies/" element={<SignIn />} />
            <Route path="/rocketmovies/signup" element={<SignUp />} />
        </Routes>
    )
}
