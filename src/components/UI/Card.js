import React from 'react';
import styles from './Card.module.css';

const Card = props => {
    return (
        <div className={`${styles['user-container']} ${props.className}`}>{props.children}
        </div>
        );
};

export default Card;
