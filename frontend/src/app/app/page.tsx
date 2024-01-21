"use client";

import { NextPage } from 'next';
import ConnectButton from '../components/ConnectButton';
import Navbar from '../components/Navbar';
import { BalanceDisplay } from '../components/BalanceDisplay';
import { SendSolForm } from '../components/SendSolForm';
// TODO: Fazer aparecer as informações da wallet no frontend como public Key e o balance.

const Page: NextPage = () => {

  return (
    <>
          <div className='flex-col bg-black'>
            <ConnectButton>
              <div className='w-full'>
                <Navbar />
              </div>
              <div className=''>
                  <BalanceDisplay />
                  <SendSolForm />
              </div>
            </ConnectButton>
          </div>
    </>
  )

}

export default Page;