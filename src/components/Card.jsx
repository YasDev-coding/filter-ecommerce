import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoBag } from "react-icons/io5";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div className="container rounded border-[3px] p-6">
      <figure className="flex flex-col gap-12">
        <img
          src={img}
          alt={title}
          height={160}
          className="h-40 object-scale-down"
        />
        <figcaption className="">
          <h3 className="font-bold">{title}</h3>
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) =>
              index < star ? (
                <AiFillStar key={index} />
              ) : (
                <AiOutlineStar key={index} />
              ),
            )}
            <p className="ml-2">{reviews}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-x-3">
              <span className="line-through">{prevPrice}</span>
              <span>{newPrice}</span>
            </div>
            <IoBag className="text-xl" />
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
