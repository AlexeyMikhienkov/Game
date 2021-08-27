import React from "react";
import BonusRound from "./bonusRound";

export default function Multiply({className, multBonus}) {
    const elems = [];

    for (let i = 0; i < 5; i++) {
        const elem = <BonusRound className={`bonus__round`} key={i} isActive={false}/>;
        elems.push(elem);
    }


    return (
        <div className={className ?? ""}>
            {elems}
            <p className={"bonus__text"}>{multBonus}</p>
        </div>
    )
}