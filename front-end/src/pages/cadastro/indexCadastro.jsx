import React from "react"
import './stylesCadastro.css'  //import estilizacao css
import bootstrap from 'bootstrap' //import estilizacao bootstrao
import Header from '../header/indexHeader'

const Cadastro = () => { 

    return (
        <div>
            <Header/>
            <div className="totalArea">
                <div className="buttons"> 
                    <div><h1>button 1</h1></div>
                    <div><h1>button 1</h1></div>
                    <span><h1>button 1</h1></span>
                    <span><h1>button 1</h1></span>
                </div>
    
            </div> 
        </div>
    );
}


export default Cadastro;