import Game from "../game/game";
import React from "react";
//TODO: добавить уровень, передавать его в Game
// как только в game новый уровень, в game генерируется новый grid

export default function GameWrapper({className}) {
    let level = 0;
    level = Math.min(Math.max(level, 0), 8);

    return (
        <div className={className ?? ""}>
            <Game className={"game-wrapper__game"} lvl={level} isTutorial={true}/>
        </div>
    )
}

//TODO: убрать opacity у блока 75 
// вытащить палец
