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
        setUsuario((prev) => ({...prev, [name]:value}))
    }

    const prevUser = {email: "otavio@mail.com", senha: "1234"}

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(prevUser.email === usuario.email && prevUser.senha === usuario.senha){
            return alert("Logado")
        }
        return alert("Email ou senha incorreta")
    }
    
    if (!!showCadastro) return <CadastroForm show={showCadastro} setShow={() => setShowCadastro(!showCadastro)}/>;
    return(
        <>
        <div className="login-container">
            <div className="login-form-container">
                <form onSubmit={(e) => handleSubmit(e)} className="login-form">
                    <Input label="Email" type="text" name="email" value={usuario.email} event={(e) => handleChange(e)}/>
                    <Input label="Senha" type="password" name="senha" value={usuario.senha} event={(e) => handleChange(e)}/>
                <button type="submit">Confirmar</button>
                </form>
                <button onClick={() => setShowCadastro(!showCadastro)}><p style={{fontSize:"12px", color:"blue"}}>Não possui uma conta? Cadastre-se</p></button>
            </div>
        </div>
        </>
    )
}

export default LoginForm