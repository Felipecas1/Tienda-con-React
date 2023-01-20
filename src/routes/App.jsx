import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import NewPassword from '../pages/NewPassword';
import CreateAccount from '../pages/CreateAccount';
import Orders from '../pages/Orders';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/recovery-password' element={<RecoveryPassword />} />
                    <Route path='/create-new-password' element={<NewPassword />} />
                    <Route path='/create-new-account' element={<CreateAccount />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;