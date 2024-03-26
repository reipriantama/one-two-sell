import { IoFootballSharp } from 'react-icons/io5';

const Select = (props: any) => {

  return (
    <div className='flex items-center gap-1 text-[#757575]'>
      {props.iconSelect}
      {/* <label>Choose a car:</label> */}
      <select name='' id='' className='bg-none ml-2'>
        {props.options?.map((option: any, index: number) => (
          <option key={index} value={option.value} className='bg-none'>
            {option.label}
          </option>
        ))}
      </select>

      {/* <select name='cars' id='cars' className='bg-none'>
        <option value='' disabled selected>
          Olahraga
        </option>
        <option value='volvo' className='bg-none'>
          Volvo
        </option>
        <option value='saab' className='bg-none'>
          Saab
        </option>
        <option value='mercedes' className='bg-none'>
          Mercedes
        </option>
        <option value='audi' className='bg-none'>
          Audi
        </option>
      </select> */}
    </div>
  );
};

export default Select;
