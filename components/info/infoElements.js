import Element from "../element/element";
import {elementsTitle} from "../../constants/copyright";
import React from "react";
import {result} from "../../hooks/resultObject";

export default function InfoElements({level}) {
    return elementsTitle.map(({value}) =>
        <Element className={"info__element"} key={value} title={value}
                 subtitle={addSubtitle(value, level)}/>
    )
}

function addSubtitle(title, level) {
    switch (title) {
        case "УРОВЕНЬ":
            return `${level + 1}-9`;
        case "ОЧКИ":
            return result.totalPoints;
        case "ВРЕМЯ":
            return "00:00";
    }
}