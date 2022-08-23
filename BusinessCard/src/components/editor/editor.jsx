import React from 'react';
import Blankform from '../blankform/blankform';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';
function Editor({ cards, onAdd }) {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            {cards.map(card => (
                <CardEditForm key={card.id} card={card} />
            ))}
            <Blankform onAdd={onAdd} />
        </section>
    );
}

export default Editor;