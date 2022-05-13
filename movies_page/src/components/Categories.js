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
    text-transform: uppercase;
    padding: 10px 30px;
    color: #1976d2;
    margin: 0;
    text-align: center;
    transition: all 0.2s;
    font-weight: 600;
    border-radius: 2px;
    border-bottom: 2px solid white;
    &:hover {
      cursor: pointer;
      border-bottom: 2px solid #757575;
      background: #e9e9e9;
    }
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
