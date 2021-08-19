import React from "react";
import {tutorial} from "../../constants/copyright";
import TutorialItem from "./tutorialItem";

export default function Tutorial({className}) { // className = main__tutorial
    return (
        <div className={`tutorial ${className ?? ""}`}>
            <h3 className={"tutorial__title"}>{tutorial.title}</h3>
            <ul className={"tutorial__items"}>
                <TutorialItems/>
            </ul>
        </div>
    )
}

function TutorialItems() {
    return tutorial.items.map(item => {
        return (
            <TutorialItem className={"tutorial__item"} key={item.title} title={item.title} subtitle={item.subtitle}/>
        )
    })
}


