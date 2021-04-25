import React from "react";
import { Switch, Route } from "react-router-dom";
import { paths } from "../../data";
import History from "../History/index";
import Products from "../Products/index";
import ProductCard from "../ProductCard/index";
import Product from "../Product/index";
import '../../styles/products.css';
import '../../styles/card.css';

const Main = () => {
  return (
    <Switch>
      <Route
        exact
        path="/store-react-dominguez-laura/"
        render={() => {
          return (
            <Products
              info={paths.products}
              render={(product) => <ProductCard {...product} />}
            />
          );
        }}
      />

      <Route
        exact
        path="/store-react-dominguez-laura/history"
        render={() => {
          return (
            <History
              info={paths.history}
              render={(product) => <Product {...product} />}
            />
          );
        }}
      />
    </Switch>
  );
};

export default Main;