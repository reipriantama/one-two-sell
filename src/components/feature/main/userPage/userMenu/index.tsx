import React, { useState } from 'react';
import Button from '../../../../ui/button';
import { IoClose } from 'react-icons/io5';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='p-6 border-2 rounded-2xl shadow-sm flex-1'>
      <Button
        buttonText='Jual Tiket'
        className='w-full py-3 px-2 font-semibold border-b-2 '
      />
      <Button
        buttonText='Request Penarikan'
        className='w-full py-3 px-2 font-semibold border-b-2'
        onClick={() => setIsOpen(true)}
      />
      <Button
        buttonText='Riwayat Transaksi'
        className='w-full py-3 px-2 font-semibold border-b-2'
        link='/user/transaction-history'
      />
      <Button
        buttonText='E-Tiket Kamu'
        className='w-full py-3 px-2 font-semibold border-b-2'
        link='/user/your-ticket'
      />
      <Button
        buttonText='Ganti Sandi'
        className='w-full py-3 px-2 font-semibold border-b-2'
      />

      {isOpen && (
        <div className='fixed z-10 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='w-full rounded-3xl max-w-[708px] bg-white p-6 space-y-6'>
            <div className='flex justify-between items-center'>
              <p className='text-2xl font-semibold'>Request Penarikan</p>
              <IoClose className=' text-[#1C1B1F]' onClick={closeModal} />
            </div>
            <div className='space-y-2 border-b-2 pb-6'>
              <p className='text-[#757575]'>Informasi Penarikan</p>
              <div className='flex font-medium justify-between'>
                <p className='flex-1'>John Doe</p>
                <p className='flex-1'>johndoe@gmail.com</p>
              </div>
              <div className='flex font-medium justify-between'>
                <p className='flex-1'>+62 813 1265 3546</p>
                <p className='flex-1'>BCA 27‑9300‑3056</p>
              </div>
            </div>
            <div className='space-y-6 border-b-2 pb-6'>
              <p className='text-xl font-semibold'>Metode Penarikan</p>
              <div className='border-[1px] p-4 rounded-[4px]'>
                Bank Transfer
              </div>
            </div>
            <div className='py-6'>
              <p className='text-xl font-semibold'>Detail Penarikan</p>
              <div>table</div>
            </div>
            <div className='space-y-6'>
              {/* Seharusnya button diganti oleh accordion */}
              <Button
                buttonText='Tarik Saldo'
                className='w-full flex justify-center'
                primary
              />
              <p className='flex justify-center text-xs text-[#A6A6A6]'>
                Dengan menekan tombol Tarik Saldo saya telah membaca dan setuju
                dengan syarat & aturan yang berlaku
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
