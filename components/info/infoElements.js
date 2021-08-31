import Element from "../element/element";
import {elementsTitle} from "../../constants/copyright";
import React from "react";
import {result} from "../../hooks/resultObject";
import {levels} from "../../constants/constants";

export default function InfoElements({level, time}) {
    return elementsTitle.map((item) => {
        return <Element className={"info__element"} key={item.type} title={item.title}
                 subtitle={addSubtitle(item.type, level, time)}/>
    });
}

function addSubtitle(type, level, time) {
    switch (type) {
        case "level":
            return `${level + 1}-${levels.length}`;
        case "points":
            return result.totalPoints;
        case "time":
            return time;
    }
}