import { FC } from "react"

interface inputProps {
    label: string,
    type: string,
    name: string,
    value: string,
    event: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input = ({ label, type, name, value, event }: inputProps) => {

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} value={value} onChange={event} />
        </>
    )
}

export default Input;