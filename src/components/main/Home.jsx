import { Home } from "./Home.styled";
import ItemCard from "./ItemCard";

export default function HomePage() {
  return (
    <Home>
      <h1 className="heading">{"Vegetables"}</h1>
      <section className="items-section">
        <div className="items-side__menu">
          <form className="item-filter">
            <label htmlFor="" className="label-title">
              Price
            </label>
            <div className="item-filter__wrapper">
              <input type="checkbox" name="20" id="20" />
              <label htmlFor="20">$20</label>
            </div>
            <div className="item-filter__wrapper">
              <input type="checkbox" name="50" id="50" />
              <label htmlFor="50">$50</label>
            </div>
            <div className="item-filter__wrapper">
              <input type="checkbox" name="100" id="100" />
              <label htmlFor="100">$100</label>
            </div>
          </form>
        </div>
        <div className="grid-container">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </section>
    </Home>
  );
}
