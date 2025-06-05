import Image from 'next/image';
import { Typography } from '../Typography';
import { Tag } from '../Tag';

interface CardProps {
  title: string;
  description: string;
  image: string;
  tag: string;
  price: string;
}

export const Card = ({ title, description, image, tag, price }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      {/* Image */}
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <Typography variant="h3-bowler" className="mb-2">
              {title}
            </Typography>
            <Tag>{tag}</Tag>
          </div>
          <Typography variant="text-bold" className="text-dark-purple">
            {price}
          </Typography>
        </div>

        <Typography variant="text-standard" className="text-dark-purple">
          {description}
        </Typography>
      </div>
    </div>
  );
}; 