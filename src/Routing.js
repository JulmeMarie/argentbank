import { Routes, Route } from 'react-router-dom';
import SigninForm from './Components/SigninForm/SigninForm';
import Home from './Components/Home/Home';
import User from './Components/User/User';

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SigninForm />} />
            <Route path='/user' element={<User />} />
        </Routes>
    )
}

export default Routing;