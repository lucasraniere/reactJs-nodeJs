import React, { Component } from 'react'
import './Contador.css'

import Display from './Display'
import PassoForm from './PassoForm'

// export default class Contador extends React.Component

export default class Contador extends Component {

    constructor(props) {
        super(props)

        this.state = {
            passo: props.passo || 1,
            valor: props.valor || 0,
        }
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
       return (
            <div className='Contador'>
                <h2>Contador</h2>

                <PassoForm passo={this.state.passo}
                    onPassoChange={this.mudarPasso}/>
                
                <Display valor={this.state.valor}/>

                <div>
                    <button onClick={this.dec}>-</button>
                    <button onClick={this.inc}>+</button>
                </div>
           </div>
       ) 
    }

}