import { Button, styled } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "../store/actions/shopActions";

const Wrapper = styled("div")`
  position: fixed;
  z-index: 1000;
  right: 20px;
  top: 80px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
  ${({ expanded }) =>
    expanded &&
    `
    width: 400px;
    height: 600px;
    background: white;
    border: 1px solid red;
    border-radius: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 16px;
  `}
`;
const BasketIcon = styled("span")`
  font-size: 40px;
`;

export function BasketItem({ product, count }) {
  return <div>{product.product.title} - {count}</div>;
}

export function Basket() {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.shop.basket);

  const handleRemoveFromBasket = useCallback(
    (product) => {
      dispatch(removeFromBasket(product));
    },
    [dispatch]
  );

  return (
    <Wrapper onClick={() => setExpanded(!expanded)} expanded={expanded}>
      {!expanded ? (
        <BasketIcon>🗑</BasketIcon>
      ) : (
        basket.map((product) => (
          <div>
            <BasketItem product={product} key={product.product.id} count={product.count} />
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveFromBasket(product.product.id);
              }}
            >
              Remove
            </Button>
          </div>
        ))
      )}
    </Wrapper>
  );
}
