import {results} from "../constants/copyright";

export function getStatisticData(data) {
    console.log(data);
    return Object.entries(data).map(([key, value]) => {
        const data = {};
        switch (key) {
            case "rightAnswers":
                data.value = `${value.right} из ${value.all}`;
                break;
            case "totalPoints":
                data.value = value;
                break;
            case "accuracyAnswers":
                data.value = value;
                break;
        }
        data.text = results[key] ?? "";
        return data;
    });
}