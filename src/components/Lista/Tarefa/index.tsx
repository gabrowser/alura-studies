import style from "../Lista.module.scss"

export default function Tarefa({tipo, tempo}: {tipo: string, tempo: string}) {
    return (
        <li  className={style.item}>
            <h3>{tipo}</h3>
            <span>{tempo}</span>
        </li>
    )
}