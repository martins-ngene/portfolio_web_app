// Interface to declare datatypes for buttons
export interface ButtonPropsI {
  href?: string;
  label?: string;
  isFilled?: boolean;
  src?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
