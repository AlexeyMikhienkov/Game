import Game from "../game/game";
import React from "react";

export default function GameWrapper({className}) {
    let level = 0;
    level = Math.min(Math.max(level, 0), 8);

    return (
        <div className={className ?? ""}>
            <Game className={"game-wrapper__game"} lvl={level} isTutorial={true}/>
        </div>
    )
}

