import React from 'react';
import '../styles/NewPassword.scss';

const CreateNewPassword = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src="./Logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                <h1  className="tittle">Create a new password</h1>
                <p className="subtittle">Enter a new password for your account</p>
                <form action="/" className="form">
                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="**********" className="input input-password"/>
                    <label for="re-password" className="label">Re-enter Password</label>
                    <input type="password" id="re-password" placeholder="**********" className="input input-password"/>

                    <input type="submit" value="Confirm" className="primary-button login-button"/>
                </form>
            </div>
        </div>
    );
}

export default CreateNewPassword;