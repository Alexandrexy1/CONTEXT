import { Name } from '../Name';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

export function Client() {
    const { clientsLength } = useContext(UserContext);
    return(
        <div>
            <h2>Quantidade de clientes: {clientsLength}</h2>
            <Name/>
        </div>
    )
}