import React from "react";
import {bonus} from "../../constants/copyright";
import Multiply from "./multiply";

export default function Bonus({className}) {
    return (
        <div className={`bonus ${className ?? ""}`}>
            <p className={"bonus__title"}>{bonus}</p>
            <Multiply className={"bonus__rounds"} multBonus={"x1"}/>
        </div>
    )
}