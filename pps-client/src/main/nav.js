import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './header'

export default function Nav(props){
    return (
        <BrowserRouter>
            <Header logIn={props.logIn}/>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/quick" element={<h1>quick</h1>} />
                <Route path="/help" element={<h1>help</h1>} />
                <Route path="/login" element={<h1>login</h1>} />
            </Routes>
        </BrowserRouter>
    )
}