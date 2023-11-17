/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useState } from 'react';


interface UserProviderProps {
    children: ReactNode;
}


interface UserContextData {
    client: string;
    clientsLength: number;
    changeClientName: (name: string) => void;
    newClient: () => void;
}


export const UserContext = createContext({} as UserContextData);

export default function UserProvider({ children }: UserProviderProps) {
    const [client, setClient] = useState('cliente teste');
    const [clientsLength, setClientsLength] = useState(10);

    function changeClientName(name: string) {
        setClient(name);
    }

    function newClient() {
        setClientsLength(clients => clients + 1);
    }
    
    return(
        <UserContext.Provider value={{ client, clientsLength, changeClientName, newClient }}>
            {children}
        </UserContext.Provider>
    )
}