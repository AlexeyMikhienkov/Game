import React from "react";
import BonusRound from "./bonusRound";

export default function Multiply({className, mult}) {
    const elems = [];

    for (let i = 0; i < 5; i++) {
        const elem = <BonusRound className={`bonus__round`} key={i} isActive={i < mult ? "active": null}/>;
        elems.push(elem);
    }


    return (
        <div className={className ?? ""}>
            {elems}
            <p className={"bonus__text"}>{"x" + mult}</p>
        </div>
    )
}