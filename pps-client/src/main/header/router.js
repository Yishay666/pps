import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './header'
import HomeScreen from '../screens/home'
import HelpScreen from '../screens/help'
import StatusesScreen from '../screens/statuses'
import QuickQuestionsScreen from '../screens/quick_questions'
import LogIn from './login'

export default function Router(props){
    return (
        <BrowserRouter>
            <Header logIn={props.logIn}/>
            <Routes>
                {/* components, needs to be created */}
                {/* <Route exact path="/settings" element={<Settings />} />
                <Route exact path="/notifications" element={<Notifications />} />
                <Route exact path="/messages" element={<Chats />} />
                <Route path="/messages/:user_id" element={<Chat />} />
                <Route path="/user/:user_id" element={<User />} /> 
                <Route exact path="/search" element={<Search />} /> */}

                {/* screens */}
                <Route exact path="/" element={<HomeScreen />} />
                <Route exact path="/quick" element={<QuickQuestionsScreen />} />
                <Route exact path="/help" element={<HelpScreen />} />
                <Route exact path="/statuses" element={<StatusesScreen />} />
                <Route exact path='/login' element={<LogIn />} />
            </Routes>
        </BrowserRouter>
    )
}