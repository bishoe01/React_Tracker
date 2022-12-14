import React from 'react';
import Blankform from '../blankform/blankform';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';
function Editor({ cards, onAdd , onDelete , UpdateCard}) {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            {Object.keys(cards).map(key => (
                <CardEditForm key={key} card={cards[key]} onDelete={onDelete} UpdateCard={UpdateCard}/>
            ))}
            <Blankform UpdateCard={UpdateCard} />
        </section>
    );
}

export default Editor;