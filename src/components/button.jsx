import React from 'react';

class ButtonCustom extends React.Component {
    render() {
        const { type, submit, children } = this.props;
        return (
            <input type={type} className='bg-blue-500 text-white p-2 rounded' value={children} />
        );
    }
};

export default ButtonCustom;
