import React from "react";

export default function TutorialItem({title, subtitle}) {

    return (
        <li className={"tutorial__item"}>
            <h3 className={"tutorial__item-title"}>{title}</h3>
            <p className={"tutorial__item-subtitle"}>{subtitle}</p>
        </li>
    )
}