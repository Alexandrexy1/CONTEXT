import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user'

export function Name() {
    const [name, setName] = useState('');
    const { client, changeClientName } = useContext(UserContext);
    return(
        <div>
            <strong>Cliente: {client}</strong>
            <div>
                <input className='border-2'
                type="text" value={name} onChange={e => setName(e.target.value)} />
                <button className='bg-blue-500 ml-3 p-1 hover:bg-blue-600'
                onClick={() => changeClientName(name)}>Mudar</button>
            </div>
        </div>
    )
}