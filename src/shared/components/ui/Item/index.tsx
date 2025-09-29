import { Typography } from '../Typography';
import { ItemProps } from './types';

export default function Item({ icon, label, value }: ItemProps) {
  return (
    <div className="gap-xxxs flex items-center">
      {icon}

      <Typography
        as="strong"
        className="flex items-center text-black"
        fontFamily="montserrat"
      >
        {label}
      </Typography>

      <Typography fontFamily="montserrat">{value}</Typography>
    </div>
  );
}
