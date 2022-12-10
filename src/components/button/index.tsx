import * as C from "./style";

type Props = {
  label: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const Button = ({ label, onClick }: Props) => {
  return (
    <C.Container onClick={onClick}>
      <C.Label>{label}</C.Label>
    </C.Container>
  );
};

export default Button;
