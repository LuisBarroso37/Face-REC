import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './ProfileIcon.css';

class ProfileIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        const { toggleModal, onRouteChange } = this.props;
        return (
            <div className='profile-icon'>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle
                        tag='span'
                        data-toggle='dropdown'
                        aria-expanded={this.state.dropdownOpen}
                    >
                        <img
                            src='http://tachyons.io/img/logo.jpg'
                            className='profile-avatar' alt='Avatar' 
                        />
                    </DropdownToggle>
                    <DropdownMenu right className='dropdown-menu'>
                        <DropdownItem onClick={() => toggleModal()}>View Profile</DropdownItem>
                        <DropdownItem onClick={() => onRouteChange('signout')}>Sign out</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

export default ProfileIcon;