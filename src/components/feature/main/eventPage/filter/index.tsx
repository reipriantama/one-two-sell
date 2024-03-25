const FilterTop = () => {
  return (
    <div className='flex justify-between'>
      <div className='text-sm font-medium'>
        Menampilkan 1-8 dari total 775 event publik
      </div>
      <label htmlFor=''>
        Urutkan :
        <select id='waktu' name='waktu'>
          <option value='Waktu Mulai (Terdekat)' disabled>
            Pilih
          </option>
          <option value='Waktu Mulai (Terdekat)'>Waktu Mulai (Terdekat)</option>
        </select>
      </label>
    </div>
  );
};
export default FilterTop;
