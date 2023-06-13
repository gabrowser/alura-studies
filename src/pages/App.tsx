import Cronometro from "../components/Cronometro";
import Form from "../components/Formulario";
import Lista from "../components/Lista";
import style from "./App.module.scss"

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <Lista/>
      <Cronometro />
    </div>
  );
}

export default App;
