import Element from "../element/element";
import {elementsText} from "../../constants/copyright";
import React from "react";

export default function InfoElements({level}) {
    return (
        Object.entries(elementsText).map(([key, value]) => {
            return <Element className={"info__element"} key={key} level={level} title={value.title} subtitle={value.subtitle}/>
        })
    )
}