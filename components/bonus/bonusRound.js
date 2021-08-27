import React from "react";

export default function BonusRound({className, isActive}) {
    return <div className={`${className ?? ""} ${isActive ? `bonus__round_${isActive}` : ""}`} />
}