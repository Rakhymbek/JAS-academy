import { Button, Container, Grid,} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import {
  addToBasket,
  fetchProducts,
  removeFromBasket,
} from "../store/actions/shopActions";
import { ProductBlock } from "../components/ProductBlock";
import { Basket } from "../components/Basket";
import { OrderFormModal } from "../components/OrderFormModal";
import { Catalog } from "../components/Categories";


export function ShopPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.shop.products);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToBasket = useCallback(
    (product) => {
      dispatch(addToBasket(product));
    },
    [dispatch]
  );

  return (
    <Container sx={{position: 'relative'}}>
      <Catalog />
      <Basket onAddToBasket={handleAddToBasket} />
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item lg={3} xs={12} md={4} sm={6} key={product.id}>
            <ProductBlock
              product={product}
              onAddToBasket={() => handleAddToBasket(product)}
            />
          </Grid>
        ))}
      </Grid>
      <OrderFormModal />
    </Container>
  );
}
