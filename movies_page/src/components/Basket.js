import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  styled,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "../store/actions/shopActions";

const Wrapper = styled("div")`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  transition: 0.2s;
`;

const ProductItems = styled("div")`
  position: relative;
  display: flex;
  width: 30vw;
  padding: 25px;
  flex-direction: column;
  justify-content: center;
  margin: ${(props) => (props.length ? 0 : "auto")};

  @media (max-width: 1120px) {
    width: 40vw;
  }
  @media (max-width: 900px) {
    width: 55vw;
  }
  @media (max-width: 712px) {
    width: 70vw;
  }
  @media (max-width: 560px) {
    width: 90vw;
  }
  @media (max-width: 435px) {
    width: 100vw;
  }
`;

const CloseDrawerBtn = styled("button")`
  display: block;
  position: absolute;
  top: 1%;
  right: 1%;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

export function BasketItem({ product, count, onAddToBasket }) {
  const dispatch = useDispatch();

  const handleRemoveFromBasket = useCallback(
    (product) => {
      dispatch(removeFromBasket(product));
    },
    [dispatch]
  );

  return (
    <Card sx={{ backGround: "grey" }}>
      <CardContent sx={{ display: "flex" }}>
        <CardMedia
          style={{ maxWidth: 80 }}
          component="img"
          height="80px"
          image={product.product.image}
          alt="green iguana"
        />
        <div>
          <Typography paddingLeft={1} variant="body1">
            {product.product.title}
          </Typography>
          <Typography
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              overflowY: "hidden",
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
            }}
            paddingLeft={1}
            variant="body2"
            color="text.secondary"
          >
            {product.product.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Typography sx={{ paddingLeft: 1, marginRight: "auto" }} variant="h6">
          {product.product.price * count}$
        </Typography>
        <Button onClick={() => onAddToBasket(product.product)} size="small">
          +
        </Button>
        {count}
        <Button
          onClick={(e) => handleRemoveFromBasket(product.product.id)}
          size="small"
        >
          -
        </Button>
      </CardActions>
      <Divider />
    </Card>
  );
}

export function Basket({ onAddToBasket }) {
  const basket = useSelector((state) => state.shop.basket);
  const [open, setOpen] = useState(false);

  function countAllItems(products) {
    return products.reduce((acc, next) => acc + next.count, 0);
  }

  function countAllPrices(products) {
    return products
      .reduce((acc, next) => acc + next.product.price * next.count, 0)
      .toFixed(2);
  }

  return (
    <Wrapper>
      <Button
        edge="start"
        color="primary"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        Basket 🛒
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <ProductItems sx={{ gap: 5 }} length={basket.length}>
          <CloseDrawerBtn onClick={() => setOpen(false)}>
            &#10006;
          </CloseDrawerBtn>
          <Typography fontSize="20px" variant="h6">
            You have {countAllItems(basket)} goods that worth:{" "}
            {countAllPrices(basket)}$
          </Typography>
          {basket.length ? (
            basket.map((product) => (
              <div key={product.product.id}>
                <BasketItem
                  product={product}
                  count={product.count}
                  onAddToBasket={onAddToBasket}
                />
              </div>
            ))
          ) : (
            <div style={{ textAlign: "center" }}>
              <Typography marginBottom={4} variant="h3">
                Ничо нету
              </Typography>
              <img
                src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg"
                alt="empty basket"
              />
            </div>
          )}
        </ProductItems>
      </SwipeableDrawer>
    </Wrapper>
  );
}
