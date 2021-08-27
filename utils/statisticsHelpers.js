import {results} from "../constants/copyright";

export function getStatisticData(data) {
    return Object.entries(data).map(([key, value]) => {
        const data = {};
        console.log(key, value);
        switch (key) {
            case "rightAnswers":
                data.value = `${value.right} из ${value.all}`;
                break;
            default:
                data.value = value;
                break;
        }
        console.log(results[key]);
        data.text = results[key] ?? "";
        return data;
    });
}