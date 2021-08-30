export const result = {
    totalPoints: 0,
    rightAnswers: {
        right: 0,
        all: 0,
    },
    accuracyAnswers: 1,
};

export function useResult() {
    const {totalPoints, rightAnswers: {right, all}, accuracyAnswers} = result;
    return [{totalPoints, right, all, accuracyAnswers}, {setTotalPoints, updateResult, setRightAnswers}];

    function updateResult(totalPoints, right, all) {
        setTotalPoints(totalPoints);
        setRightAnswers(right, all);
        setAccuracy(right, all)
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
}

export function clearResult() {
    result.totalPoints = 0;
    result.rightAnswers.right = 0;
    result.rightAnswers.all = 0;
    result.accuracyAnswers = 1;
}