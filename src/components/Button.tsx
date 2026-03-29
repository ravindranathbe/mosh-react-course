interface Props {
  label: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

const Button = ({ label, onClick, color = "primary" }: Props) => {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
