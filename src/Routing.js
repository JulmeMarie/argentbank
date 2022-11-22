import { Routes, Route } from 'react-router-dom';
import SigninForm from './Components/SigninForm/SigninForm';
import Home from './Components/Home/Home';

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SigninForm />} />
        </Routes>
    )
}

export default Routing;