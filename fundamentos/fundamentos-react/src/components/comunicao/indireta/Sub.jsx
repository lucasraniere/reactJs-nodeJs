import React from 'react'

export default (props) => {
    function acao(){
        props.onClicar(Math.random(), 'Gerado');
    }

    return (
        <div>
            {/* <button onClick={() => {
                props.onClicar(Math.random())
            }}>Alterar</button> */}
            <button onClick={acao}>Alterar</button>
        </div>
    );
};