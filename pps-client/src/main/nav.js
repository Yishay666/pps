import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './header'

export default function Nav(props){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/quick" element={<h1>quick</h1>} />
                <Route path="/help" element={<h1>help</h1>} />
            </Routes>
        </BrowserRouter>
    )
}