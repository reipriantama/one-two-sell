import React from 'react';
import Button from '../../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

const EventInformation = () => {
  return (
    <div className=''>
      <div className='space-y-6'>
        <div className='flex justify-between'>
          <div className='space-y-1'>
            <div className='text-2xl font-semibold'>Event Kamu</div>
            <div className='text-xs text-[#757575] font-medium'>
              Silahkan cek detail tiket event yang akan kamu pesan
            </div>
          </div>
          <div className='flex'>
            <div className='text-sm text-[#757575]'>Sisa waktu pembelian</div>
          </div>
        </div>
        <div className='flex justify-between gap-6'>
          <div className='p-6 border-2 rounded-2xl space-y-3 flex-1'>
            <p className='font-semibold text-xl text-[#2D4074]'>
              Parade Sihir - Bandung
            </p>
            <div className='bg-[#E0E0E0] rounded-lg w-[498px] h-[108px] 2xl:w-[850px]'>
              pic
            </div>
            <div className='flex items-center'>
              <div className='text-[#2D4074] text-2xl font-bold border-r-[1px] pr-3'>
                <p className=''>MEI</p>
                <div className='flex items-center gap-1 '>
                  <p>18</p>
                  <p className='text-xs font-medium'>2023</p>
                </div>
              </div>
              <div className='text-[#2D4074] text-base font-bold pl-3'>
                7.30 - 09.00 PM
              </div>
              <div className='pl-[157px]'>
                <p className='text-sm text-[#A6A6A6] font-semibold'>
                  Lapangan Pussenif
                </p>
                <p className='text-xs text-[#A6A6A6]'>Bandung</p>
              </div>
            </div>
          </div>
          <div className='p-6 border-2 rounded-2xl space-y-[31px] flex-1'>
            <div className='space-y-1 w-[270px]'>
              <p className='font-medium text-[#1E1E1E]'>
                General Admission - Early Bird
              </p>
              <p className='text-[10px] font-medium text-[#A6A6A6]'>
                Unrestricted view
              </p>
              <div className='text-base font-bold text-[#2D4074]'>
                Rp 250.000,-
              </div>
            </div>
            <div className='space-y-1 w-[270px]'>
              <p className='font-medium text-[#1E1E1E]'>VIP</p>
              <p className='text-[10px] font-medium text-[#A6A6A6]'>
                Unrestricted view
              </p>
              <div className='text-base font-bold text-[#2D4074]'>
                Rp 250.000,-
              </div>
            </div>
            <p className='text-[10px] text-[#A6A6A6] font-medium'>
              Harga belum termasuk pajak dan admin fee
            </p>
          </div>
        </div>
        <div className='border-t-[1px] border-[#BABABA]'></div>
        <div className='space-y-3'>
          <div>
            <div className='flex justify-center py-5 px-4 text-[#5D5D5D] font-bold bg-black bg-opacity-5'>
              <span className='flex-1 flex justify-center'>Jenis Kategori</span>
              <span className='flex-1 flex justify-center'>
                Harga per Tiket
              </span>
              <span className='flex-1 flex justify-center'>Kuantitas</span>
              <span className='flex-1 flex justify-center'>Jumlah</span>
            </div>
            <div className='flex justify-center items-center py-5 text-xs'>
              <span className='flex-1 flex justify-start px-4'>
                General Admission - Early Bird
              </span>
              <span className='flex-1 flex justify-end px-4'>Rp 250.000,-</span>
              <span className='flex-1 flex justify-center px-4'>
                <Select>
                  <SelectTrigger className='max-w-min gap-1'>
                    <SelectValue placeholder='1' />
                  </SelectTrigger>
                  <SelectContent className='bg-white text-xs'>
                    <SelectItem value='1'>1</SelectItem>
                    <SelectItem value='2'>2</SelectItem>
                    <SelectItem value='3'>3</SelectItem>
                  </SelectContent>
                </Select>
              </span>
              <span className='flex-1 flex justify-end px-4'>Rp 750.000,-</span>
            </div>
            <div className='flex justify-center items-center py-5 text-xs'>
              <span className='flex-1 flex justify-start px-4'>VIP</span>
              <span className='flex-1 flex justify-end px-4'>Rp 550.000,-</span>
              <span className='flex-1 flex justify-center px-4'>
                <Select>
                  <SelectTrigger className='max-w-min gap-1'>
                    <SelectValue placeholder='1' />
                  </SelectTrigger>
                  <SelectContent className='bg-white text-xs'>
                    <SelectItem value='1'>1</SelectItem>
                    <SelectItem value='2'>2</SelectItem>
                    <SelectItem value='3'>3</SelectItem>
                  </SelectContent>
                </Select>
              </span>
              <span className='flex-1 flex justify-end px-4'>Rp 0</span>
            </div>
          </div>
          <p className='text-xs text-[#A6A6A6]'>
            Dengan menekan tombol beli sekarang saya telah membaca dan setuju
            dengan syarat & aturan yang berlaku
          </p>
        </div>
        <div className='space-y-3'>
          <Button
            buttonText='Proses Tiket'
            primary
            className='w-full flex justify-center'
          />
          <p className='flex justify-center text-[10px] text-[#A6A6A6]'>
            Harga belum termasuk pajak dan admin fee
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventInformation;
