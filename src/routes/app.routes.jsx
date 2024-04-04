import { Route, Routes } from "react-router-dom";

import { Home } from '../pages/home'
import { New } from '../pages/new'
import { Preview } from '../pages/preview'
import { Profile } from '../pages/profile'

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}