import { UserContext } from '../../contexts/user'
import { useContext } from 'react';

export function Footer() {
    const { newClient, clientsLength } = useContext(UserContext);

    return(
        <footer>
            <hr />
            <strong>Quantidade de alunos online: {clientsLength}</strong>
            <button className='bg-blue-500 ml-3 p-1 hover:bg-blue-600'
            onClick={() => newClient()}>New Client</button>
        </footer>
    )
}