
interface NameProps {
    name: string;
    changeName: (name: string) => void;
}

export function Name({ name, changeName }: NameProps) {
    return(
        <div>
            <strong>Cliente: {name}</strong>
            <button onClick={() => changeName('Alex')}>Trocar nome</button>
        </div>
    )
}