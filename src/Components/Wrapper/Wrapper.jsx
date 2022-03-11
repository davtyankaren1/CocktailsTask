import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import Spanish from '../languages/es-MX.json';
import Armenian from '../languages/arm-US.json';
import English from '../languages/en-US.json';
import Russian from '../languages/ru-MX.json';

export const Context = React.createContext()

const local = navigator.language

let lang;
if (local === "en-US") {
    lang = English
} if (local === "es-MX") {
    lang = Spanish
} if (local === "arm-US") {
    lang = Armenian
} if (local === "ru-MX") {
    lang = Armenian
}


const Wrapper = (props) => {
    const [locale, setLocale] = useState(local)
    const [messages, setMessages] = useState(lang)

    const selectLang = (e) => {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "arm-US") {
            setMessages(Armenian)
        } if (newLocale === "en-US") {
            setMessages(English)
        } if (newLocale === "es-MX") {
            setMessages(Spanish)
        } if (newLocale === "ru-MX") {
            setMessages(Russian)
        }
    }

    return (
        <Context.Provider value={{locale, selectLang}}>
            <IntlProvider messages={messages} locale={local}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    )
}

export default Wrapper;