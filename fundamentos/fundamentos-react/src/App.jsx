import './App.css'
import React from 'react'


import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'

export default (props) => (
    <div className='App'>
        <Card titulo='#01 - Primeiro Componente'>
            <Primeiro/>
        </Card>

        <Card titulo='#02 - Componentes com Parâmetros'>
            <ComParametro titulo='Esse é o título'
            subtitulo='Esse é o subtitulo (passado por parâmetro [props])'/>
        </Card>

        <Card titulo='#03 - Componentes com Filhos'>
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo='#04 - Componentes com Repetição'>
            <Repeticao/>
        </Card>

        <Card titulo='#05 - Condicional v1'>
            <Condicional numero={10}/>
        </Card>

        <Card titulo='#06 - Condicional com IF'>
            <CondicionalComIf numero={15}/>
        </Card>
    </div>
);