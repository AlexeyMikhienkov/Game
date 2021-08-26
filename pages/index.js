import Main from "../components/main/main";
import React, {useState, useEffect} from "react";
import Tutorial from "../components/tutorial/tutorial";
import ResultPanel from "../components/result-panel/resultPanel";
import {getStatisticData} from "../utils/statisticsHelpers";
import {header} from "../constants/copyright";
import Counter from "../components/counter/counter";
import {consumeIterator} from "next/dist/build/babel/loader/util";
import Block from "../components/block/block";
import {loadGetInitialProps} from "next/dist/shared/lib/utils";
import Grid from "../components/grid/grid";
import {settings} from "../constants/constants";
import {levels} from "../constants/constants";
import {createRandomGrid} from "../utils/createRandomGrid";
import Game from "../components/game/game";
import GameWrapper from "../components/game-wrapper/gameWrapper";
import Element from "../components/element/element";

export default function Home() {
    /*

    // rotate - поворот
    // blink - мигание
    // flick - мерцание
    // undefined - без анимации

    return <Block className={"grid__block"} withFinger={withFinger} onAction={() => console.log("Click")}
                  blockText={blockText} blockColor={blockColor} animation={"flick"}/>


    return <Grid className={"game__grid"} grid={grid} size={size} onAction={() => console.log("Click")}/>


    let level = 4;
    level = Math.min(Math.max(level, 1), 9);

    const size = levels[level - 1].size;
    const grid = createRandomGrid(levels[level - 1]);
    console.log(grid);

    return <Grid className={"game__grid"} grid={grid} size={size} onAction={() => console.log("Click")}/>
     */

    return <GameWrapper className={"game-wrapper"} />
   // return <Element className={"info__element"} title={"Уровень"} subtitle={"1-9"}/>
}

