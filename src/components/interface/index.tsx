// Interface to declare datatypes for buttons
export interface ButtonPropsI {
  href?: string;
  type?: "reset" | "button" | "submit" | undefined;
  label?: string;
  isFilled?: boolean;
  src?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ModalPropsI {
  children: React.ReactNode;
  onClick?: (param: any) => void;
}

export interface CardPropsI {
  name: string;
  className?: string;
  src: string;
  alt: string;
  onClick?: (param: any) => void;
}

export interface SectionPropsI {
  children: React.ReactNode;
  header?: string;
  id: string;
  className?: string;
}
