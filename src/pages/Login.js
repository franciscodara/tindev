import React from 'react';
import './Login.css';

import logo from "../assets/logo.svg";
/*import { isContainer } from 'postcss-selector-parser';
import { isModuleDeclaration } from '@babel/types';*/

export default function(){
    return(
        <div className='login-container'>
            <form>
                <img src= {logo} alt="Tindev"/>
                <input placeholder='Digite seu usuário Github'/>
                <button type='submit'> Enviar</button>
            </form>
            
        </div>
    )
}