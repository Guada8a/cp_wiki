import React from 'react';

class InputCustom extends React.Component {
    render() {
        const { type } = this.props;
        let inputStyle;

        switch (type) {
            case 'text':
                inputStyle = 'bg-gray-100';
                break;
            case 'password':
                inputStyle = 'bg-gray-200';
                break;
            case 'email':
                inputStyle = 'bg-gray-300';
                break;
            default:
                inputStyle = 'bg-gray-400';
                break;
        }

        return (
            <input type={type} className={`border border-gray-500 rounded p-2 ${inputStyle}`} />
        );
    }
};

export default InputCustom;