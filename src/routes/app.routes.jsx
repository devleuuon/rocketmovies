import { Route, Routes } from "react-router-dom";

import { Home } from '../pages/home'
import { New } from '../pages/new'
import { Preview } from '../pages/preview'
import { Profile } from '../pages/profile'

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/rocketmovies/" element={<Home />} />
            <Route path="/rocketmovies/new" element={<New />} />
            <Route path="/rocketmovies/preview" element={<Preview />} />
            <Route path="/rocketmovies/profile" element={<Profile />} />
        </Routes>
    )
}