import React, { Component } from 'react';
import '../SignIn/SignIn.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    onSubmitSignIn = (event) => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
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
        return (
            <article>
                <main className='sign-in-container center'>
                    <div className='sign-in-form'>
                        <fieldset className='sign-in-fields'>
                            <legend className='sign-in-title'>Register</legend>
                            <div className='name-field'>
                                <label className='field-label' htmlFor='name'>Name</label>
                                <input 
                                    onChange={this.onNameChange} 
                                    className='input-field' 
                                    type='text' 
                                    name='name' 
                                />
                            </div>
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
                                value='Register' 
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;