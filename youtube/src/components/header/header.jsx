import React, { useEffect, useRef, useState } from 'react';
import styles from './header.module.css';
function Header(props) {

    const formRef = React.createRef();
    const inputRef = React.createRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setWord(inputRef.current.value);

    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
            <img className={styles.img} src="/images/logo.png" alt="logo" />
            <h1 className={styles.title}>Youtube</h1>
            </div>
            <input className={styles.input} type="search" placeholder='Search...'/>
            <button className={styles.button} type="submit" >
                <img className={styles.buttonImg} src="images/search.png" alt="search" />

            </button>
        </header>
    )
}


export default Header;