export interface OptionProps<T = string> {
  id: T;
  label: string;
}

export interface SelectProps {
  selectedOption: OptionProps;
  label: string;
  options: OptionProps[];
  onSelect: (option: OptionProps) => void;
}
