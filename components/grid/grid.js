import PropTypes from "prop-types";
import React, {useState} from "react";
import Block from "../block/block";

function Grid({className, rows, columns, withFinger, onAction, blockText, blockColor, blockAnimation}) {
    let size = 0;

    if (rows === 2 && columns === 3)
        size = 1;
    else if (rows === 3 && columns === 4)
        size = 2;
    else if (rows === 4 && columns === 4)
        size = 3;
    else if (rows === 5 && columns === 5)
        size = 4;

    return (
        <div className={`grid ${className ?? ""}`}>
            {RowsArr(rows, columns, size)}
        </div>
    );
}

function RowsArr(rows, columns, size) {
    let arr = [];
    let i = rows;

    while (i--) {
        arr.push(
            <div className={"grid__row"} style={{height: 210 / rows}}>
                {ColumnsArr(columns, size)}
            </div>
        )
    }

    return arr;
} //TODO: в этом методе неправильно передается 210 (как статический параметр)

function ColumnsArr(columns, size) {
    let arr = [];
    let i = columns;

    while (i--) {
        arr.push(
                <Block className={`grid__block block_size-${size}`} withFinger={false} onAction={() => console.log("Click")}
                       blockText={230} blockColor={"#f28e37"} animation={undefined}  />
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

//TODO: правильно передать пропы в Block
// что делать, если размер не подходит ни под один формат?

// 2 3, 3 4, 4 4, 5 5 _size-1, _size-2, _size-3, _size-4