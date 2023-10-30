import "../../App.css";
import { MyType } from "../../data/etsy";
import classNames from "classnames";

interface Props {
  items: MyType[];
}

const Listing = ({ items }: Props) => {
  return (
    <>
      {items.map((item, i) => {
        const image = item.MainImage?.url_570xN;
        let title;
        const titleLength = item.title?.length;
        if (titleLength > 50) {
          const titleText = item.title?.slice(0, 50);
          title = titleText + "...";
        } else {
          title = item.title;
        }

        let price;
        if (item.currency_code === "USD") {
          price = "$" + item.price;
        } else if (item.currency_code === "EUR") {
          price = "€" + item.price;
        } else {
          price = item.price + " " + item.currency_code;
        }

        return (
          <div className="item" key={i}>
            <div className="item-image">
              <a href={item.url}>
                <img src={image || ""} alt={item.title}></img>
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{title}</p>
              <p className="item-price">{price}</p>
              <p
                className={classNames(
                  "item-quantity",
                  item.quantity <= 10 && "level-low",
                  item.quantity > 10 && item.quantity <= 20 && "level-medium",
                  item.quantity > 20 && "level-high"
                )}
              >
                {item.quantity} left
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Listing;
