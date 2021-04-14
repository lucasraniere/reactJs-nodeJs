import './Card.css'
import React from 'react'

export default props =>
    <div className='Card' style={{borderColor: props.color || '#000'}}>
        <div className='Conteudo'>
            {props.children} {/* pega tudo o que é passado dentro da tag  */}
        </div>
        <div className='Footer' style={{backgroundColor: props.color || '#000'}}>
            {props.titulo}
        </div>
    </div>