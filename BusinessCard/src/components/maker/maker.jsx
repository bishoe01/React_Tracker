import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
function Maker({authService}) {
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    };
    const [cards, setCard] = useState({
    '1':{
        id: '1',
        name:"Bishoe",
        univ :"HANYANG ERICA",
        theme:"light",
        title:"FrontEnd",
        email:"bishoe@gmail.com",
        message:"Hello",
        filename:"bishoe",
        fileURL: null,
    },
    '2':{
        id: '2',
        name:"Bishoe1",
        univ :"HANYANG ERICA",
        theme:"colorful",
        title:"FrontEnd",
        email:"bishoe@gmail.com",
        message:"Hello",
        filename:"bishoe",
        fileURL: null,
    },
    '3':{
        id: '3',
        name:"Bishoe2",
        univ :"HANYANG ERICA",
        theme:"dark",
        title:"FrontEnd",
        email:"bishoe@gmail.com",
        message:"Hello",
        filename:"bishoe3",
        fileURL: null,
    }
});

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user){
                navigate('/');
            }
        });
    })
    const onDelete = card => {
        const Deleted = {...cards};
        delete Deleted[card.id];
        setCard(Deleted);
    }
    const CreateOrUpdateCard = card => {
        setCard(cards => {
            const Updated = {...cards};
            Updated[card.id] = card;
            return Updated;
        });
    }
    return (
        <section className={styles.maker}>
        <Header onLogout={onLogout}/>
        <div className={styles.container}>
            <Editor cards={cards} onDelete={onDelete} UpdateCard={CreateOrUpdateCard} />
            <Preview cards={cards}/>
        </div>
        <Footer/>
        </section> 
            
    );
}

export default Maker;