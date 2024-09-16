import { FC, useState } from "react"
import "./style.css"
import CadastroForm from "../CadastroForm";
import Input from "../Input";

interface usuario {
    email: string,
    senha: string
}

function LoginForm() {

    const [usuario, setUsuario] = useState<usuario>({
        email: '',
        senha: ''
    })

    const [showCadastro, setShowCadastro] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setUsuario((prev) => ({ ...prev, [name]: value }))
    }

    const prevUser = { email: "otavio@mail.com", senha: "1234" }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (prevUser.email === usuario.email && prevUser.senha === usuario.senha) {
            setUsuario({
                email: '',
                senha: ''
            })
            return alert("Logado")
        }
        return alert("Email ou senha incorreta")
    }

    if (!!showCadastro) return <CadastroForm show={showCadastro} setShow={() => setShowCadastro(!showCadastro)} />;
    return (
        <div className="login-container">
            <div className="login-form-container">
                <form onSubmit={(e) => handleSubmit(e)} className="login-form">
                    <div className="input-div">
                        <Input label="Email" type="text" name="email" value={usuario.email} required event={(e) => handleChange(e)} />
                        <Input label="Senha" type="password" name="senha" value={usuario.senha} required event={(e) => handleChange(e)} />
                    </div>
                    <div className="confirm-div">
                        <button className="confirm-button" type="submit">Confirmar</button>
                    </div>
                </form>
                <div className="login-with-apis">
                    <div className="lwa-text">
                        <p>Entrar com</p>
                    </div>
                    <div className="lwa-buttons">
                        <button className="google-login">google</button>
                        <button className="github-login">hithub</button>
                    </div>
                </div>
                <button className="cadastro-button" onClick={() => setShowCadastro(!showCadastro)}><p className="cadastro-button-p">Não possui uma conta? Cadastre-se</p></button>
            </div>
        </div>
    )
}

export default LoginForm