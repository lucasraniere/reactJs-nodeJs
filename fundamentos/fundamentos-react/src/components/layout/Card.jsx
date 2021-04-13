import './Card.css'
import React from 'react'

export default props =>
    <div className='Card'>
        <div className='Conteudo'>
            {props.children} {/* pega tudo o que é passado dentro da tag  */}
        </div>
        <div className='Footer'>
            {props.titulo}
        </div>
    </div>