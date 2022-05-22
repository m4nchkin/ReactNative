import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChangeAccordion: () => void
}


function Accordion(props: AccordionPropsType) {


    function AccordionTitle(props: AccordionTitlePropsType) {

        return <h2 onClick={props.onClickAccordionTitle}>{props.MiniTitle}</h2>
    }


    return (
        <div>
            <AccordionTitle MiniTitle={props.title} onClickAccordionTitle={props.onChangeAccordion} selected={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
            {/*/!*<button  onClick={()=>{setCollapsed(!collapsed)}} >TOGGLE</button>*!/*/}
        </div>
    )
}

type AccordionTitlePropsType = {
    MiniTitle: string
    selected:boolean
    onClickAccordionTitle: () => void
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


export default Accordion;