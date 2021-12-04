import React from "react";
import { Container } from "react-bootstrap";
import CartItems from "../components/items/CartItems";
import Categories from "../components/items/Categories";
import ItemCards from "../components/items/ItemCards";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";
import "../css/App.css";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flexed-content">
        <SideBar active="dashboard" />
        <div className="sales-content-area">
          <hr />
          <Categories />
          <hr />
          <p className="text-white">Pick Items</p>
          <Container className="cards-holder">
            <div className="row">
              <ItemCards />
            </div>
          </Container>
        </div>
        <div className="cart-content-area">
          <hr />
          <Container className="cards-holder">
            <div className="row">
              <CartItems />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
