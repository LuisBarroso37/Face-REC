import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({
            signInEmail: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            signInPassword: event.target.value
        })
    }

    onSubmitSignIn = (event) => {
        fetch('http://localhost:4000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(res => res.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        });
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article>
                <main className='sign-in-container center'>
                    <div className='sign-in-form'>
                        <fieldset className='sign-in-fields'>
                            <legend className='sign-in-title'>Sign In</legend>
                            <div className='email-field'>
                                <label className='field-label' htmlFor='email-address'>Email</label>
                                <input 
                                    onChange={this.onEmailChange} 
                                    className='input-field' 
                                    type='email' 
                                    name='email-address' 
                                />
                            </div>
                            <div className='password-field'>
                                <label className='field-label' htmlFor='password'>Password</label>
                                <input 
                                    onChange={this.onPasswordChange} 
                                    className='input-field' 
                                    type='password' 
                                    name='password' 
                                />
                            </div>
                        </fieldset>
                        <div className='center'>
                            <input 
                                onClick={this.onSubmitSignIn} 
                                className='sign-in-button' 
                                type='submit' 
                                value='Sign in' 
                            />
                        </div>
                        <div className='register-container center'>
                            <p 
                                onClick={() => onRouteChange('register')} 
                                className='register-button dim'
                            >Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default SignIn;