import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/favicon/Logo.png";

import { Header } from "./MainHeader.styled";

const categories = ["Fruits", "Vegetables", "Meats"];
const MainHeader = ({ children }) => {
  function onClick() {
    console.log("clicked");
  }

  return (
    <>
      <Header>
        <Link href="/">
          <a className="logo">
            <Image src={Logo} alt="" layout="fill" />
          </a>
        </Link>
        <form>
          <select name="category" id="category" className="categories">
            <option value="" className="options">
              Categories
            </option>
            {categories.map((category) => (
              <option key={category} value={category} className="options">
                {category}
              </option>
            ))}
          </select>
          <div className="search-wrapper">
            <input
              type="text"
              name="search"
              id="search"
              className="search-bar"
            />
            <SearchIcon className="search-icon" />
          </div>
        </form>

        <div className="menu">
          <button onClick={onClick} className="sign-in">
            Sign In
          </button>

          <div className="cart-wrapper">
            <ShoppingCartIcon className="shopping-cart" />
            <span className="item-counter">{"5"}</span>
          </div>
        </div>
      </Header>
      {children}
    </>
  );
};

export default MainHeader;
