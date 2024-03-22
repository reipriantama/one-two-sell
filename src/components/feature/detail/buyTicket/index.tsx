import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/feature/ui/select';
import Button from '../../ui/button';

const BuyTicket = () => {
  return (
    <div
      className='xl:w-[432px]
border-2 rounded-xl p-6 space-y-6'
    >
      <div className='text-sm font-semibold'>Beli Tiket Sekarang</div>
      <div className='flex justify-between items-center'>
        <div className='space-y-1'>
          <p>General Admission - Early Bird</p>
          <div className='text-[10px] font text-[#A6A6A6]'>
            Unrestricted view
          </div>
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
      <div className='space-y-2'>
        <p className='text-sm text-[#848484]'>Beli Sekarang</p>
        <div className='text-[#2D4074] text-2xl font-bold'>Rp 1.000.000,-</div>
      </div>

      <div className='space-y-2'>
        <Button
          buttonText='Beli Tiket'
          className='w-full flex justify-center'
          primary
        />
      </div>
    </div>
  );
};
export default BuyTicket;
