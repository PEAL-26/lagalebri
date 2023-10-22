import { SlLocationPin } from "react-icons/sl";
import { BsStar } from "react-icons/bs";
import Image from "next/image";

interface CardProps {
  title: string;
  price: string;
  location: string;
  rating: number;
  views: number;
  image: string;
  alt?: string;
}

export function Card(props: CardProps) {
  const { title, location, rating, views, price, image, alt = "" } = props;

  return (
    <div className="relative h-96 w-72 rounded-2xl bg-primary shadow-lg shadow-primary transition-all hover:scale-110 hover:cursor-pointer">
      <Image src={image} alt={alt} fill className="rounded-2xl object-cover" />
      <div className="absolute inset-x-2 bottom-2 flex flex-col gap-3 rounded-lg bg-zinc-100 bg-opacity-80 p-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-black ">{title}</span>
          <span className="text-base font-bold text-black">{price}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="line-clamp-1 inline-flex items-center text-sm font-light leading-none text-black">
            <SlLocationPin className="mr-1" size={12} /> {location}
          </span>
          <span className="line-clamp-1 inline-flex items-start text-sm font-light leading-none text-black">
            <BsStar className="mr-1" size={12} />
            {rating.toFixed(1)} Avaliação
            <span className="ml-1 text-neutral-500">
              ({views} Visualizações)
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
