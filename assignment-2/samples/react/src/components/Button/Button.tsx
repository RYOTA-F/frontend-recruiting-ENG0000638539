import style from "./Button.module.css";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={style.button}>
      {children}
    </button>
  );
}
