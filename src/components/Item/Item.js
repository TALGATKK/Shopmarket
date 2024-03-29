import { TbShoppingCartPlus } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Item.css";
export function Item(props) {
  const { product, handleAddProduct, isLoggedIn } = props;
  return (
    <div className="item">
      <Link to="/">
        <img
          loading="lazy"
          src={props.image}
          alt={props.title}
          width="400"
          height="300"
        />
      </Link>

      <span> {props.price}$</span>
      <h5>{props.title}</h5>
      <div className="item-rating-sold">
        <span className="item-star">
          <FaStar />
        </span>
        <span className="item-rating">{props.rating}</span>
        <span className="item-sold"> Куплено: {props.sales} шт</span>
      </div>
      <button
        disabled={!isLoggedIn}
        onClick={() => handleAddProduct(product)}
        className={isLoggedIn ? "Active" : "notActive"}
      >
        <TbShoppingCartPlus />
        {"Добавить в корзину"}
      </button>
    </div>
  );
}

export default Item;
