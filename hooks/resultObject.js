export const result = {
    totalPoints: 0,
    rightAnswers: {
        right: 0,
        all: 0,
    },
    accuracyAnswers: 1,
    combo: 1
};

export function useResult() {
    const {totalPoints, rightAnswers: {right, all}, accuracyAnswers, combo} = result;
    return [{totalPoints, right, all, accuracyAnswers, combo}, {setTotalPoints, updateResult, setRightAnswers, setCombo}];

    function updateResult(totalPoints, right, all, combo) {
        setTotalPoints(totalPoints);
        setRightAnswers(right, all);
        setAccuracy(right, all);
        setCombo(combo);
    }

    function setTotalPoints(value) {
        result.totalPoints = value;
    }

    function setRightAnswers(right, all) {
        result.rightAnswers.right = right;
        result.rightAnswers.all = all;
    }

    function setAccuracy(right, all) {
        result.accuracyAnswers = Number((right / all).toFixed(2)) ?? undefined;
    }

    function setCombo(value) {
        result.combo = value;
    }
}

export function clearResult() {
    result.totalPoints = 0;
    result.rightAnswers.right = 0;
    result.rightAnswers.all = 0;
    result.accuracyAnswers = 1;
    result.combo = 1;
}