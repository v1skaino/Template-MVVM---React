interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, ...rest }: ButtonType) => {
  return <button {...rest}>{label}</button>;
};

export { Button };
