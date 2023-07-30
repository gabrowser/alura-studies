import { ITarefa } from "../../types/tarefa";
import style from "./Lista.module.scss";
import Tarefa from "./Tarefa";

interface Props {
    tarefas: ITarefa[],
    // É assim quer se tipa uma função, colocando o que ela espera receber e o que ela retornará. Nesse caso, como é uma função que não retorna nada, o tipo será void.
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({ tarefas, selecionaTarefa }: Props) { 
    /* ITarefa[] significa que é um array de ITarefas */
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(tarefa => (
                    <Tarefa {...tarefa} key={tarefa.id} selecionaTarefa={selecionaTarefa}/>
                ))}
            </ul>
        </aside>
    )
}