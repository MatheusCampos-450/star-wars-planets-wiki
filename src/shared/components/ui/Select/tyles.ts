export interface OptionProps<T = string> {
  id: T;
  label: string;
}

export interface SelectProps {
  label: string;
  options: OptionProps[];
  onSelect: (option: OptionProps) => void;
}
