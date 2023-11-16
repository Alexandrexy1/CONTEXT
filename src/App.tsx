import { useState } from 'react';
import { Client } from './components/Client';


export default function App() {
  const [name, setName] = useState('Alexandre');

  return (
    <div>
      <h1 className='font-medium text-3xl p-4 border-b-2'>Empresa Dev</h1>
      <Client clientName={name} changeName={(name: string) => setName(name)}/>
    </div>
  )
}

