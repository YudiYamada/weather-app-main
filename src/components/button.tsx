interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button className="rounded-md bg-blue-500 p-4 hover:cursor-pointer">{children}</button>;
};

export default Button;
