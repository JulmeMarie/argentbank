import { Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import Home from './Components/Home/Home';
import User from './Components/User/User';
import RequireAuth from './RequireAuth';

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<LoginForm />} />
            <Route path="/user" element={<RequireAuth> <User /> </RequireAuth>} />
        </Routes>
    )
}

export default Routing;