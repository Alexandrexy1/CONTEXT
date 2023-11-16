import { Name } from '../Name';

interface ClientProps {
    clientName: string;
    changeName: (name: string) => void;
}

export function Client({ clientName, changeName }: ClientProps) {
    return(
        <div>
            <h2>Quantidade de clientes: 23</h2>
            <Name name={clientName} changeName={changeName}/>
        </div>
    )
}