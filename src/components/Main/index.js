import React from "react";
import { Switch, Route } from "react-router-dom";
import { paths } from "../../data";
import Products from "../Products/index";
import ProductCard from "../ProductCard/index";

const Main = () => {
  return (
    <Switch>
      <Route
        exact
        path=""
        render={() => {
          return (
            <Products
              info={paths.products}
              render={(product) => <ProductCard {...product} />}
            />
          );
        }}
      />
    </Switch>
  );
};

export default Main;
