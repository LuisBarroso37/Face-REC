import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.user.name,
            age: this.props.user.age,
            pet: this.props.user.pet
        }
    }

    onFormChange = (event) => {
        switch(event.target.name) {
            case 'username':
                this.setState({ name: event.target.value});
                break;
            case 'age':
                this.setState({ age: event.target.value});
                break;
            case 'pet':
                this.setState({ pet: event.target.value});
                break;
            default:
                return;
        }
    }

    onProfileUpdate = (data) => {
        fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.sessionStorage.getItem('token')
            },
            body: JSON.stringify({ formInput: data})
        }).then(res => {
            if (res.status === 200 || res.status === 304) {
                this.props.toggleModal();
                this.props.loadUser({...this.props.user, ...data});
            }
        }).catch(err => {'Error updating profile'});
        
    }

    render() {
        const { toggleModal, user } = this.props;
        const { name, age, pet } = this.state;
        return (
            <div className='profile-modal'>
                <article className='profile-article'>
                    <main className='profile-container'>
                        <img
                            src='http://tachyons.io/img/logo.jpg'
                            className='profile-image' 
                            alt='Avatar' 
                        />
                        <h2 style={{textAlign: 'center'}}>{user.name}</h2>
                        <p>{`Images submitted: ${user.entries}`}</p>
                        <p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
                        <hr />
                        <label className='input-label' htmlFor='username'>Username:</label>
                        <input 
                            className='input-field' 
                            placeholder={user.name}
                            type='text' 
                            name='username'
                            onChange={this.onFormChange} 
                        />
                        <label className='input-label' htmlFor='age'>Age:</label>
                        <input  
                            className='input-field' 
                            placeholder={user.age}
                            type='text' 
                            name='age'
                            onChange={this.onFormChange}
                        />
                        <label className='input-label' htmlFor='pet'>Pet:</label>
                        <input 
                            className='input-field' 
                            placeholder={user.pet}
                            type='text' 
                            name='pet'
                            onChange={this.onFormChange}
                        />
                        <div className='save-container'>
                            <button onClick={() => this.onProfileUpdate({ name, age, pet })} className='profile-button'>Save</button>
                            <button onClick={() => toggleModal()} className='profile-button cancel'>Cancel</button>
                        </div>
                    </main>
                    <div onClick={() => toggleModal()} className='modal-close'>&times;</div>
                </article>
            </div>
        );
    }
}

export default Profile;