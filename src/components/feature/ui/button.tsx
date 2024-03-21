import Link from 'next/link';

const Button = (props: any) => {
  const buttonClassName = `py-3 ${props.outline ? 'border-[1px]  ' : ''} ${
    props.primary
      ? 'bg-gradient-to-b from-[#4A62A2] to-[#2D4074] text-white'
      : ''
  } ${props.className}`;

  return (
    // sebaiknya menggunakan logic switchcase
    <div>
      {props.link ? (
        <Link
          href={props.link}
          className={`flex items-center justify-center rounded-[4px] ${buttonClassName}`}
          onClick={props.onClick}
        >
          <div>{props.buttonText}</div>
          <div>{props.icon}</div>
        </Link>
      ) : (
        <button
          className={`flex items-center rounded-[4px] ${buttonClassName}`}
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
