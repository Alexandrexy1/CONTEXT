import { Client } from './components/Client';
import { Footer } from './components/footer';
import UserProvider from './contexts/user';

export default function App() {
  return (
    <UserProvider>
      <div>
        <h1 className='font-medium text-3xl p-4 border-b-2'>Empresa Dev</h1>
        <Client/>
        <br />
        <Footer/>
      </div>
    </UserProvider>
  )
}

