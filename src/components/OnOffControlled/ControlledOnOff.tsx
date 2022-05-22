import React from 'react';

type OnOffPropsType = {
    isOn: boolean
    onChange: () => void
}

export const ControlledOnOff = (props:OnOffPropsType) => {

    const onStyles = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        backgroundColor: props.isOn ? 'green' : 'white'
    }
    const offStyles = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        marginLeft: '3px',
        backgroundColor: props.isOn ? 'white' : 'red'
    }
    const indicatorStyles = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        backgroundColor: props.isOn ? 'green' : 'red'
    }
    return (
        <div>
            <div style={onStyles} onClick={props.onChange}>On</div>
            <div style={offStyles} onClick={props.onChange}>Off</div>
            <div style={indicatorStyles}></div>
        </div>
    );
};

