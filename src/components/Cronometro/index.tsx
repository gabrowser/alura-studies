import Button from "../Button";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useState } from "react";

interface Props {
    selected: ITarefa | undefined
}

export default function Cronometro({selected}: Props) {
    const [time, setTime] = useState<number>();
    if (selected?.tempo) {
        timeToSeconds(selected.tempo)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {time}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Button>Começar</Button>
        </div>
    )
}