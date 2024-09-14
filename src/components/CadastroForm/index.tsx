import { FC } from "react"
import "./style.css"

interface CadastroProps{
    show: boolean,
    setShow: () => void
}

function CadastroForm({ show, setShow }: CadastroProps) {

    if (!show) return null;
    return(
        <div className="login-container">
            <div className="login-form-container">
                <form action="" className="login-form">
                    <label htmlFor="nome">Nome completo</label>
                    <input type="text" id="nome" name="nome" className="login-form-input" />
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" className="login-form-input" />
                    <label htmlFor="senha">Senha</label>
                    <input type="text" id="senha" name="senha" className="login-form-input" />
                    <label htmlFor="confirmar-senha">Confirmar senha</label>
                    <input type="text" id="confirmar-senha" name="confirmar-senha" className="login-form-input" />
                        <h4>Genero</h4>
                    <div className="login-form-genero">
                        <input type="radio" id="masculino" name="genero" value="masculino" className="radio" />
                        <input type="radio" id="feminino" name="genero" value="feminino" className="radio" />
                        <input type="radio" id="none" name="genero" value="nao-informar" className="radio" />
                    </div>
                </form>
                <button onClick={setShow}>Já possui uma conta? Faça login</button>
            </div>
        </div>
    )
}

export default CadastroForm