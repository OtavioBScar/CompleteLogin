import { FC } from "react"
import "./style.css"
import Input from "../Input";

interface CadastroProps {
    show: boolean,
    setShow: () => void
}

interface usuario {
    nome: string,
    email: string,
    senha: string,
    confirmarSenha: string
}

function CadastroForm({ show, setShow }: CadastroProps) {

    if (!show) return null;
    return (
        <div className="cadastro-container">
            <div className="cadastro-form-container">
                <form action="" className="cadastro-form">
                    <Input label="Nome Completo" type="text" name="nome" value="" required event={() => ""} />
                    <Input label="Email" type="text" name="email" value="" required event={() => ""} />
                    <Input label="Senha" type="password" name="senha" value="" required event={() => ""} />
                    <Input label="Confirmar senha" type="password" name="senha" value="" required event={() => ""} />
                    <div className="cadastro-form-genero">
                        <div className="cadastro-form-genero-text">
                            <h4>Genero</h4>
                        </div>
                        <div className="cadastro-form-genero-radios">
                            <input type="radio" id="masculino" name="genero" value="masculino" className="radio" />
                            <label htmlFor="masculino">Masculino</label>

                            <input type="radio" id="feminino" name="genero" value="feminino" className="radio" />
                            <label htmlFor="feminino">Feminino</label>

                            <input type="radio" id="none" name="genero" value="nao-informar" className="radio" />
                            <label htmlFor="none">Não Informar</label>
                        </div>
                    </div>
                </form>
                <button className="login-button" onClick={setShow}><p className="login-button-p">Já possui uma conta? Entre</p></button>
            </div>
        </div>
    )
}

export default CadastroForm