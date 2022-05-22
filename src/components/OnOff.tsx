import React, {useState} from "react";

type onOffPropsType = {
    onChange: (on:boolean) => void
}

export const OnOff = (props: onOffPropsType) => {

    let [on, setOn] = useState(false)

    const onStyles = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyles = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        marginLeft: '3px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyles = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)

    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return <div>
        <div style={onStyles} onClick={onClicked}>On
        </div>
        <div style={offStyles} onClick={offClicked}>Off
        </div>
        <div style={indicatorStyles}></div>
    </div>
}