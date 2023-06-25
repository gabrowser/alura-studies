import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined /* o ponto de interrogação sinaliza que essa é uma prop opcional */
}> {
    render() {
        const { type="button" } = this.props /* a prop type vai vir button como padrão*/
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    } 
}

export default Button;