import { Link } from 'react-router-dom';

import img from './img/shopping.png';

const CartEmpty = () => {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <div className="cart--empty__title">
          <h2>Корзина пустая</h2>
          <div className="cart--empty__icon">😕</div>
        </div>

        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={img} alt="Empty cart" />
        <Link to=".." className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
