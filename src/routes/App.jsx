import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import EmailPassword from '../pages/EmailPassword';
import NewPassword from '../pages/NewPassword';
import PasswordRecovery from '../pages/PasswordRecovery';
import CreateAccount from '../pages/CreateAccount';
import Orders from '../pages/Orders';
import MyAccount from '../pages/MyAccount';
import Checkout from '../pages/Checkout';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/email-password' element={<EmailPassword />} />
                    <Route path='/create-new-password' element={<NewPassword />} />
                    <Route path='/password-recovery' element={<PasswordRecovery />} />
                    <Route path='/create-new-account' element={<CreateAccount />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/my-account' element={<MyAccount />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;