import BasketItem from "./BasketItem";
export default function BasketList(props) {
  const { order } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="basket">
      <ul className="collection basket-list">
        <li className="collection-item active">Basket</li>
        {order.length ? (
          order.map((item) => {
            return (
              <BasketItem
                key={item.id}
                {...item}
                removeFromBasket={props.removeFromBasket}
              />
            );
          })
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active">
          Total Cost: {totalPrice}
          <b>$</b>
        </li>

        <i
          className="material-icons basket-close "
          onClick={props.handleBasketShow}
        >
          close
        </i>
      </ul>
    </div>
  );
}
