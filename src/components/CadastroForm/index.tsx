import { FC } from "react"
import "./style.css"

interface CadastroProps{
    show: boolean,
    setShow: () => void
}

interface usuario{
    nome: string,
    email: string,
    senha: string,
    confirmarSenha: string
}

function CadastroForm({ show, setShow }: CadastroProps) {

    if (!show) return null;
    return(
        <div className="cadastro-container">
            <div className="cadastro-form-container">
                <form action="" className="cadastro-form">
                    <label htmlFor="nome">Nome completo</label>
                    <input type="text" id="nome" name="nome" className="cadastro-form-input" />
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" className="cadastro-form-input" />
                    <label htmlFor="senha">Senha</label>
                    <input type="text" id="senha" name="senha" className="cadastro-form-input" />
                    <label htmlFor="confirmarSenha">Confirmar senha</label>
                    <input type="text" id="confirmar-senha" name="confirmarSenha" className="cadastro-form-input" />
                        <h4>Genero</h4>
                    <div className="cadastro-form-genero">
                        <input type="radio" id="masculino" name="genero" value="masculino" className="radio" />
                        <input type="radio" id="feminino" name="genero" value="feminino" className="radio" />
                        <input type="radio" id="none" name="genero" value="nao-informar" className="radio" />
                    </div>
                </form>
                <button onClick={setShow}>Já possui uma conta? Faça cadastro</button>
            </div>
        </div>
    )
}

export default CadastroForm