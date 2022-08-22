import React from 'react';
import styles from './card_edit_form.module.css';
function CardEditForm({ card }) {
    return (
        <h1>{card.id}</h1>
    );
}

export default CardEditForm;