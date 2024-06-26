import Link from 'next/link';

const Button = (props: any) => {
  const buttonClassName = `py-3 ${
    props.outline
      ? 'border-[1px] border-[#4A62A2] text-[#4A62A2] hover:bg-[#4A62A2] hover:text-white'
      : ''
  } ${
    props.primary
      ? 'bg-gradient-to-b from-[#4A62A2] to-[#2D4074] text-white hover:bg-gradient-to-b hover:from-[#2D4074] hover:to-[#4A62A2]'
      : ''
  } ${props.danger ? 'bg-[#D73A28] text-white hover:bg-red-600' : ''} 
  ${props.confirm ? 'bg-[#129555] text-white hover:bg-green-600' : ''}
  
    ${props.className}`;

  return (
    // sebaiknya menggunakan logic switchcase
    <div>
      {props.link ? (
        <Link
          href={props.link}
          className={`flex items-center rounded-[4px]  ${buttonClassName}`}
          onClick={props.onClick}
        >
          <div>{props.buttonText}</div>
          <div>{props.icon}</div>
        </Link>
      ) : (
        <button
          className={`flex items-center rounded-[4px]  ${buttonClassName}`}
          onClick={props.onClick}
        >
          <div>{props.buttonText}</div>
          <div>{props.icon}</div>
        </button>
      )}
    </div>
  );
};

export default Button;
