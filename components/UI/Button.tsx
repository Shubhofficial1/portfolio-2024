interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({ children, bgColor }) => {
  return (
    <button
      className={`z-10 px-5 py-3 ${
        bgColor ? bgColor : "bg-slate-800"
      } rounded-lg cursor-pointer transition hover:scale-105 flex items-center gap-3 `}
    >
      {children}
    </button>
  );
};

export default Button;
