import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingPropsType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {ControlledOnOff} from "./components/OnOffControlled/ControlledOnOff";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingPropsType>(1)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)

    return (
        <div>

            <OnOff onChange={setOn}/> {on.toString()}
            {/*<ControlledOnOff isOn={on} onChange={()=>setOn(!on)}/>*/}

            {/*<Accordion title={'Menu'} />*/}
            <Accordion title={'Users list'} collapsed={accordionCollapsed} onChangeAccordion={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
