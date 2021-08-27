import React from "react";
import {elementsText} from "../../constants/copyright";
import {result} from "../../hooks/resultObject";


export default function Element({className, title, subtitle, level}) {
    switch (title) {
        case elementsText.level.title:
            subtitle = title === elementsText.level.title ? (level + 1) + subtitle : subtitle;
            break;
        case elementsText.points.title:
            subtitle = title === elementsText.points.title ? result.totalPoints : subtitle;
    }

    return (
        <div className={`element ${className ?? ""}`}>
            <p className={"element__title"}>{title}</p>
            <p className={"element__subtitle"}>{subtitle}</p>
        </div>
    )
}