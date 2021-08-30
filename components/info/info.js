import Bonus from "../bonus/bonus";
import React from "react";
import InfoElements from "./infoElements";

export default function Info({className, level, mult}) {
    return (
        <div className={`info ${className ?? ""}`}>
            <InfoElements level={level}/>
            <Bonus className={"info__bonus"} mult={mult}/>
        </div>
    )
}
