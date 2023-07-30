import { ITarefa } from "../../../types/tarefa"
import style from "../Lista.module.scss"

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Tarefa({ tipoTarefa, tempo, selected, completed, id, selecionaTarefa }: Props) {
    return (
        <li
            className={`${style.item} ${selected ? style.itemSelecionado : ''}`}
            onClick={() => selecionaTarefa({
                tipoTarefa,
                tempo,
                selected,
                completed,
                id
            })}>

            <h3>{tipoTarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}