const Button = (props: any) => {
  const buttonClassName = `py-3 ${
    props.outline ? 'border-[1px] border-navy-blue text-navy-blue' : ''
  } ${
    props.primary
      ? 'bg-gradient-to-b from-[#4A62A2] to-[#2D4074] text-white'
      : ''
  } ${props.className}`;

  return (
    // sebaiknya menggunakan logic switchcase
    <button
      className={`flex items-center justify-center rounded-[4px] ${buttonClassName}`}
      onClick={props.onClick}
    >
      <div>{props.buttonText}</div>
      <div>{props.icon}</div>
    </button>
  );
};

export default Button;
