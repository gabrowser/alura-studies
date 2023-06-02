import React from "react";

export default function Lista() {
    const tarefas = [{
        tipo: "React",
        tempo: "02:00:00"
    }, {
        tipo: "React",
        tempo: "01:00:00"
    }]
    
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>
                        <h3>{tarefa.tipo}</h3>
                        <span>{tarefa.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}