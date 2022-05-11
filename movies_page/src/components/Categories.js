import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/fetchCategories";

export function Catalog() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [subCategory, setSubcategory] = useState([]);
  const [open, setOpen] = useState(false);

  const CategoriesList = styled("div")`
    display: flex;
    flex-direction: column;
    z-index: 10;
    justify-content: center;
  `;

  const CategoryItem = styled("p")`
    font-size: 1rem;
  `;

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleMouseEnter = useCallback((category = []) => {
    setOpen(true);
    setSubcategory(category.childCategories);
  }, []);

  const handleMouseOut = useCallback(() => {
    setOpen(false);
    setSubcategory([]);
  }, []);

  return (
    <div
      style={{ display: "flex", alignItems: "baseline", position: "absolute" }}
    >
      <Button
        onMouseEnter={handleMouseEnter}
        sx={{ marginTop: 5 }}
        variant="outlined"
      >
        Catalog
      </Button>
      <div
        style={{ background: "white", zIndex: 10 }}
        onMouseLeave={handleMouseOut}
      >
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <CategoriesList>
            {open &&
              categories.map((category, index) => (
                <CategoryItem
                  key={index}
                  onMouseEnter={() => handleMouseEnter(category)}
                >
                  {category.name}
                </CategoryItem>
              ))}
          </CategoriesList>
          <CategoriesList>
            {subCategory?.map((item, index) => (
              <CategoryItem
                onMouseEnter={() => {
                  setOpen(true);
                }}
                key={index}
              >
                {item.name}
              </CategoryItem>
            ))}
          </CategoriesList>
        </div>
      </div>
    </div>
  );
}
