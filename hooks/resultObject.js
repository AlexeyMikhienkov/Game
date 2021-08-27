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
}

function updateResult({totalPoints, rightAnswers: {right, all}, accuracyAnswers}) {
    result.totalPoints = totalPoints;
    result.rightAnswers.right = right;
    result.rightAnswers.all = all;
    result.accuracyAnswers = accuracyAnswers;
}

function setTotalPoints(value) {
    result.totalPoints = value;
}

function setRightAnswers(right, all) {
    const {rightAnswers} = result;
    rightAnswers.right = right ?? rightAnswers.right;
    rightAnswers.all = all ?? rightAnswers.all;
}

export function clearResult() {
    result.totalPoints = 0;
    result.rightAnswers.right = 0;
    result.rightAnswers.all = 0;
    result.accuracyAnswers = 1;
}