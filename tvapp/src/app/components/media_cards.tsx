import Image from 'next/image';
import Link from 'next/link';
import { MediaCard as MediaCardType } from './dummy_data';

interface Props {
  card: MediaCardType;
}

export const MediaCard = ({ card }: Props) => (
  <Link href={card.route}>
    <div className="relative rounded-xl overflow-hidden shadow-md mb-6 cursor-pointer">
      <Image
        src={card.image}
        alt={card.title}
        width={300} // Default width for larger screens
        height={160} // Default height for larger screens
        className="w-[250px] h-[140px] sm:w-[350px] sm:h-[200px] lg:w-[400px] lg:h-[225px] xl:w-[270px] xl:h-[140px] 2xl:w-[300px] 2xl:h-[140px] "
      />
      <div className="absolute bottom-0 left-0 w-full p-4 text-white font-bold text-center z-20">
        {card.title}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent z-10" />
    </div>
  </Link>
);