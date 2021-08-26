import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import {checkAnswer} from "../game/game";

function Block({className, withFinger, isTutorial, value, blockText, blockColor, animation, level, setLevel, setPage}) {

    const finger = withFinger ? (<div className={"block__finger"}>
        <Image
            src={"/images/finger.svg"}
            alt={"Палец-указатель на блок"}
            width={96}
            height={103}
        />
    </div>) : null;

    return (
        <button
            className={`block ${className ?? ""} ${animation ? `block_${animation}` : ""}`}
            onClick={() => {
                if (!isTutorial) checkAnswer(blockText, value, level, setLevel, setPage)
            }} style={{backgroundColor: blockColor, opacity: `${!withFinger && isTutorial ? 0.5 : 1}`}}>
            <p className={`block__number`}>{blockText}</p>
            {finger}
        </button>
    )
}

Block.propTypes = {
    className: PropTypes.any,
    withFinger: PropTypes.bool,
    onAction: PropTypes.func,
    blockText: PropTypes.number,
    blockColor: PropTypes.string,
    blockAnimation: PropTypes.string,
};

export default Block