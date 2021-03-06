import {description} from "../../constants/copyright";
import React from "react";

export default function GameTask({value, color}) {
    return (
        <div className={"game__task"} style={{backgroundColor: color}}>
            <p className={"game__task-description"}>{description}</p>
            <p className={"game__task-value"}>{value}</p>
        </div>
    )
}