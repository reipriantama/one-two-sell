import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/main/select';
import Button from '../../../../ui/main/button';

const DetailTicket = () => {
  return (
    <div
      className='xl:w-[432px]
border-2 rounded-xl p-6 space-y-6'
    >
      <div className='flex justify-between items-center'>
        <div className='space-y-1'>
          <div>General Admission - Early Bird</div>
          <div className='text-[10px] font text-[#A6A6A6]'>
            Unrestricted view
          </div>
          <div className='text-[#2D4074] text-base font-bold'>Rp 250.000,-</div>
        </div>
        <Select>
          <SelectTrigger className='max-w-min gap-1'>
            <SelectValue placeholder='1' />
          </SelectTrigger>
          <SelectContent className='bg-white '>
            <SelectItem value='1'>1</SelectItem>
            <SelectItem value='2'>2</SelectItem>
            <SelectItem value='3'>3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='flex justify-between items-center'>
        <div className='space-y-1'>
          <div>VIP</div>
          <div className='text-[10px] font text-[#A6A6A6]'>
            Unrestricted view
          </div>
          <div className='text-[#2D4074] text-base font-bold'>Rp 250.000,-</div>
        </div>
        <Select>
          <SelectTrigger className='max-w-min gap-1'>
            <SelectValue placeholder='1' />
          </SelectTrigger>
          <SelectContent className='bg-white '>
            <SelectItem value='1'>1</SelectItem>
            <SelectItem value='2'>2</SelectItem>
            <SelectItem value='3'>3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='space-y-3'>
        <Button
          buttonText='Beli Tiket'
          className='w-full flex justify-center'
          primary
        />
        <div className='flex justify-center text-[10px] text-[#A6A6A6]'>
          Harga belum termasuk pajak dan admin fee
        </div>
      </div>
    </div>
  );
};
export default DetailTicket;
