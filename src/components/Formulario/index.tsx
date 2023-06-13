import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";

class Form extends React.Component {
    state = {
        tipoTarefa: "",
        tempo: "00:00"
    }

    /* A forma abaixo de tipar um elemento é a forma mais específica que tem */
    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <form action="" className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                {/* .bind(this) é para atrellar o escopo do this a função adicionarTarefa, que está fora, em outro escopo */}
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar?" value={this.state.tipoTarefa} onChange={evento => this.setState({...this.state, tipoTarefa: evento.target.value})} required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" value={this.state.tempo} onChange={evento => this.setState({...this.state, tempo: evento.target.value})} required />
                    {/* evento.target.vlue » é o que mapeia que aquele evento foi disparado. Quando o input mudar, consgeuiremos saber disso através do target. O value é para pegar o valor dessa mudança. Geralmente é sempre assim que pegamos o valor do input */}
                </div>
                <Button>Adicionar</Button>
            </form>
        )
    }
}

export default Form;