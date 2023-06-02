import style from "./Lista.module.scss";

export default function Lista() {
    const tarefas = [{
        tipo: "React",
        tempo: "02:00:00"
    }, {
        tipo: "JavaScript",
        tempo: "01:00:00"
    }, {
        tipo: "TypeScript",
        tempo: "01:00:00"
    }]
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index} className={style.item}>
                        <h3>{tarefa.tipo}</h3>
                        <span>{tarefa.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}