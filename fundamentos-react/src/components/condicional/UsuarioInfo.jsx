import React from "react";
import _if, { Else } from "./if";

export default (props) => {

    const usuario = props.usuario || {}
   
    return (
        <div>

            <_if test={usuario && usuario.nome}>
                Seja bem-vindo <strong> { usuario.nome }</strong>
                <Else> 
                    Seja bem-vindo <strong> Amigão </strong>
                </Else>
            </_if>
        </div>
    )
}