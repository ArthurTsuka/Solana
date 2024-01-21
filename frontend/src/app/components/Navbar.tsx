import ConnectButton from '../components/ConnectButton';
import logoSolana from '../../../public/solana-sol-logo.svg';
import Botao from '../components/Botao'
import { FC } from 'react';

const Navbar: FC = () => {
    return (
        <div className="bg-indigo-950 h-20 w-full flex justify-between items-center">
            <img src={logoSolana.src} alt="Logo" className="h-12 ml-2" />
            <div className='mr-2'>
                    <Botao />
            </div>
        </div>
    );
};

export default Navbar;
