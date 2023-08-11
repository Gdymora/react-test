interface ButtonProps {
  value: string;
  onClick: () => void;
}

export function Button({ value, onClick }: ButtonProps): JSX.Element {
  return <button onClick={onClick}>{value}</button>;
}
