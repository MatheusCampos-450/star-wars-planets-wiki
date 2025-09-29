import { Typography } from '@/shared/components/ui/Typography';
import { CardProps } from './types';

function Card({ icon, title, items }: CardProps) {
  return (
    <div className="px-sm py-xs bg-off-white flex w-full flex-col rounded-lg">
      <div className="pb-xxs border-gray90 gap-xxxs flex w-full border-b border-solid">
        {Boolean(icon) && icon}

        <Typography as="strong" fontFamily="montserrat">
          {title}
        </Typography>
      </div>

      <Typography className="pt-sm" fontFamily="montserrat">
        {items.join(', ')}
      </Typography>
    </div>
  );
}

export default Card;

export { CardFallback } from './CardFallback';
