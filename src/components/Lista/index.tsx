import { ITarefa } from "../../types/tarefa";
import style from "./Lista.module.scss";
import Tarefa from "./Tarefa";


export default function Lista({ tarefas }: {tarefas: ITarefa[]}) { 
    /* ITarefa[] significa que é um array de ITarefas */
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <Tarefa {...tarefa} key={index}/>
                ))}
            </ul>
        </aside>
    )
}