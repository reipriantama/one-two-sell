import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/feature/ui/select';
import React from 'react';

const UserTransactionHistory = () => {
  return (
    <div className='flex justify-between'>
      <p className='text-2xl font-semibold'>Riwayat Transaksi</p>
      <div className='flex items-center'>
        <label htmlFor='category' className='text-sm text-[#141414]'>
          Status
        </label>

        <Select>
          <SelectTrigger className=' ml-3 border-[1px] border-[#4A62A2] p-3 w-[244px]'>
            <SelectValue placeholder='Semua' />
          </SelectTrigger>
          <SelectContent className='bg-white '>
            <SelectItem value='proses'>Proses</SelectItem>
            <SelectItem value='berhasil'>Berhasil</SelectItem>
            <SelectItem value='gagal'>Gagal</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default UserTransactionHistory;
