import { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import phantom from '../../../public/Phantom.png'

const Botao: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <WalletMultiButton />
    </div>
  );
};


export default Botao;

