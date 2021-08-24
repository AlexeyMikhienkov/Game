import PropTypes from "prop-types";
import React from "react";
import Block from "../block/block";

export default function Grid({className, grid, size, onAction}) {
    const field = grid.map((arr, index)=>{
        const columns = arr.map(({number, color, animation, finger, colIndex})=>{
            return (
                <Block className={`grid__block block_size-${size}`} key={colIndex} withFinger={finger}
                       onAction={onAction} blockText={number} blockColor={color} animation={animation} />
            )
        });
        return (
                <div className={"grid__row"} key={index} style={{height: 210 / grid.length}}>
                    {columns}
                </div>
        )
    });

    return (
        <div className={`grid ${className ?? ""}`}>
            {field}
        </div>
    )
}

/*
Grid.PropTypes = {
    className: PropTypes.string,
    grid: PropTypes.array,
    size: PropTypes.number,
    onAction: PropTypes.func
};

 */



    /*
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
}

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


     */

// 2 3, 3 4, 4 4, 5 5 _size-1, _size-2, _size-3, _size-4