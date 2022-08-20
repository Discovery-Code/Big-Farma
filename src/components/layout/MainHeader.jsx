import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../../public/favicon/Logo.png";
import SignIn from "../forms/SignIn";
import Modal from "../Modal";
import { Header } from "./MainHeader.styled";

const categories = ["Fruits", "Vegetables", "Meats"];
export default function MainHeader({ children }) {
  const [open, setOpen] = useState(false);

  function onClick() {
    setOpen(true);
  }

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <SignIn />
      </Modal>
      <Header>
        <Link href="/">
          <a className="logo">
            <Image src={Logo} alt="" layout="fill" />
          </a>
        </Link>
        <form className="filter-form">
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
}
