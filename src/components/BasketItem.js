export default function BasketItem(props) {
  const { id, name, price, quantity, incrementQuantity, decrementQuantity } =
    props;
  return (
    <li className="collection-item">
      {name} x {quantity}={price * quantity} <b>$</b>
      <span className="secondary-content">
        <i
          className="material-icons newBtn"
          onClick={() => incrementQuantity(id)}
        >
          add_circle
        </i>
        <i
          className="material-icons newBtn"
          onClick={() => decrementQuantity(id)}
        >
          remove_circle
        </i>

        <i
          className="material-icons basket-delete"
          onClick={() => props.removeFromBasket(id)}
        >
          delete_forever
        </i>
      </span>
    </li>
  );
}
