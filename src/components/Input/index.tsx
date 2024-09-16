import { FC } from "react"
import "./style.css"

interface inputProps {
    label: string,
    type: string,
    name: string,
    value: string,
    required?: boolean,
    event: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input = ({ label, type, name, value, required, event }: inputProps) => {

    return (
        <div className="input-container">
            <input type={type} name={name} value={value} onChange={event} required={required}/>
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default Input;