import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';
function CardEditForm({ card, onDelete ,UpdateCard}) {
    const nameRef = useRef();
    const univRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const { id, name, univ, theme, title, email, message, filename, fileURL } = card;
    const onSubmit = (e) => {
        e.preventDefault();
        onDelete(card);
    };

    const onChange = (e) => {
        if(e.currentTarget == null){
            return;
        }
        e.preventDefault();
        UpdateCard({
            ...card,[e.currentTarget.name] : e.currentTarget.value,
        });

    };
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" ref={nameRef} name='name' value={name} onChange={onChange}/>
            <input className={styles.input} type="text" ref={univRef} name='univ' value={univ} onChange={onChange}/>
            <select className={styles.select} ref={themeRef} name="theme" value={theme} onChange={onChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} ref={titleRef} type="text" name='title' value={title} onChange={onChange}/>
            <input className={styles.input} ref={emailRef} type="text" name='email' value={email} onChange={onChange}/>
            <textarea className={styles.textarea} ref={messageRef} name="message" value={message} onChange={onChange}/>
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name='Delete' onClick={onSubmit} />
        </form>
    );
}

export default CardEditForm;