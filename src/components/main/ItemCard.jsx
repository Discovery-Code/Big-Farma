import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Potatoes from "../../../public/assets/potatoes.jpg";
import { StyledItemCard } from "./ItemsCard.styled";

export default function ItemCard() {
  return (
    <StyledItemCard>
      <div className="overlay">
        <p className="item-title">Brown Potatoes</p>
        <p className="item-description">
          Home grown in some of the freshest, chemical free natural soil.
        </p>
        <p className="item-price">
          <span className="dollar-sign">$</span>
          <span className="dollar">9</span>
          <sup className="cent">55</sup>
          <span className="price-per">&nbsp;&nbsp;($6.50/Pound)</span>
        </p>
        <div className="item-rating">
          <StarIcon className="rating-star" />
          <StarIcon className="rating-star" />
          <StarIcon className="rating-star" />
          <StarIcon className="rating-star" />
          <StarIcon className="rating-star" />
          <span>&nbsp;&nbsp;24,954</span>
        </div>
      </div>

      <div className="image-wrapper">
        <Image src={Potatoes} alt={"Potatoes"} layout={"fill"} />
      </div>
    </StyledItemCard>
  );
}
