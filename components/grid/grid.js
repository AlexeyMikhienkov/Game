import PropTypes from "prop-types";
import React, {useState} from "react";
import Block from "../block/block";

function Grid({className, rows, columns, withFinger, onAction, blockText, blockColor, blockAnimation}) {
    return (
        <div className={`grid ${className ?? ""}`}>
            {RowsArr(rows, columns)}
        </div>
    );

}

function RowsArr(rows, columns) {
    let arr = [];
    let i = rows;

    while (i--) {
        arr.push(
            <div className={"grid__row"} style={{height: 230 / rows}}>
                {ColumnsArr(columns)}
            </div>
        )
    }

    return arr;
}

function ColumnsArr(columns) {
    let arr = [];
    let i = columns;

    while (i--) {
        arr.push(
                <Block className={"grid__block"} withFinger={false} onAction={() => console.log("Click")}
                       blockText={230} blockColor={"#f28e37"} animation={undefined} />
        )
    }

    return arr;
}

Grid.PropTypes = {
    className: PropTypes.string,
    rows: PropTypes.number,
    columns: PropTypes.number,
    withFinger: PropTypes.bool,
    onAction: PropTypes.func,
    blockText: PropTypes.number,
    blockColor: PropTypes.string,
    blockAnimation: PropTypes.string,
};

export default Grid

//TODO: правильно передать пропы
// реализовать стили для грида
// установиить изменяющиеся размеры для grid__block, grid__row