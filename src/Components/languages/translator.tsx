import React, {useContext} from 'react';
import {Context} from "../Wrapper/Wrapper";

const Translator = () => {
    const context = useContext(Context)

    return (
            <select value={context.locale} onChange={context.selectLang} id="ddlProducts">
                <option value="es-MX" className="option">Española</option>
                <option value="arm-US" className="option">Հայերեն</option>
                <option value="en-US" className="option">English</option>
                <option value="ru-MX" className="option">Русский</option>
            </select>
    );
};

export default Translator;


