import React, { Component } from 'react';
import './Rank.css';

class Rank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emoji: ''
        }
    }

    componentDidMount() {
        this.generateEmoji(this.props.entries);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
            return null
        }

        this.generateEmoji(this.props.entries);
    }

    generateEmoji = (entries) => {
        fetch(`https://sj7s0sijk1.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
        .then(res => res.json())
        .then(emoji => this.setState({emoji: emoji.input}))
        .catch(console.log);
    }
    
    render() {
        const { name, entries } = this.props;
        const { emoji } = this.state;
        return (
            <div className='rank-container'>
                <div className='rank-text'>{`${name}, your current entry count is...`}</div>
                <div className='rank'>{entries}</div>
                <div className='rank-text'>{`Rank badge: ${emoji}`}</div>
            </div>
        );
    }
}

export default Rank;