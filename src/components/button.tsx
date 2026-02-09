interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="rounded-md bg-blue-500 p-4 hover:cursor-pointer"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
