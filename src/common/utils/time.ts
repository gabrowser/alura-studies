export function timeToSeconds(tempo: string) {
    const [hours = "0", minutes = "0", seconds = "0"] = tempo.split(":"); //ir dividir a string em partes usando o : como quebra. Cada parte será o item de um array

    const hoursInSeconds = Number(hours) * 3600;
    const minutesInSeconds = Number(minutes) * 60;
    return hoursInSeconds + minutesInSeconds + Number(seconds);
}