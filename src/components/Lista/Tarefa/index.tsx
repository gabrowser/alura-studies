import style from "../Lista.module.scss"

export default function Tarefa({tipoTarefa, tempo}: {tipoTarefa: string, tempo: string}) {
    return (
        <li  className={style.item}>
            <h3>{tipoTarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}