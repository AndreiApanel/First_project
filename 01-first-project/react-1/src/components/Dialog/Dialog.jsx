import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialog = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]
       let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How  is your life?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ]
    let dialogsElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map( m => <Message message={m.message}/>);
    return (
        <div className={s.dialog}>
            <div className={s.dialogsItems}>
                {dialogsElements}
   {/*             <DialogItem name={dialogsData [0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData [1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData [2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData [3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData [4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData [5].name} id={dialogsData[5].id}/>*/}
            </div>
            <div className={s.messages}>
                {messagesElements}
               {/* <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>
                <Message message={messages[3].message}/>
                <Message message={messages[4].message}/>*/}
            </div>
        </div>
    )
}
export default Dialog;