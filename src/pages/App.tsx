import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Form from "../components/Formulario";
import Lista from "../components/Lista";
import style from "./App.module.scss"
import { ITarefa } from "../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]) 
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
