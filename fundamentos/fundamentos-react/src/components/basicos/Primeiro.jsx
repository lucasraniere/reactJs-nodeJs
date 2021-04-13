import React from 'react'

/* function Primeiro() {
    return (
        <div>
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um componente React</h2>
        </div>
    )
}

export default Primeiro


*/ // Primeira versão da função

// código mais enxuto

export default () =>
    //<React.Fragment>
    <>
        <h1>Primeiro Componente (Arrow)</h1>
        <h2>Exemplo de um componente React (baseado em função)</h2>
    </>
    //</React.Fragment>