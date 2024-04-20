import React from 'react';

class MiComponente extends React.Component {
    render() {
        return (
            <div className='bg-blue-500 text-white p-4 m-20 rounded-2xl'>
                <h1>Hola, soy un componente de React</h1>
                <p>¡Este es mi contenido!</p>
            </div>
        );
    }
}

export default MiComponente;