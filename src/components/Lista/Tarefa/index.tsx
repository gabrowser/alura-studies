import { ITarefa } from "../../../types/tarefa"
import style from "../Lista.module.scss"

export default function Tarefa({tipoTarefa, tempo, selected, completed, id}: ITarefa) {
    return (
        <li  className={style.item}>
            <h3>{tipoTarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}