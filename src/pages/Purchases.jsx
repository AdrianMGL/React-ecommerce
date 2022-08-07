import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PurchasesItem from "../components/PurchasesItem";
import { getPurchasesThunk } from "../store/slices/purchases.slice";

const Purchases = () => {
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //
  const purchases = useSelector((state) => state.purchases);

  /** */
  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

//  console.log(purchases);

  return (
    <Container className="mt-5 pt-5 mx-auto">
      <h6>
        <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Home
        </span>
        <box-icon name="run" animation="fade-right-hover"></box-icon>
        <b className="text-primary">purchases</b>
      </h6>
      <h4 className="my-3">My purchases</h4>
      <Card className=" mb-5 mx-auto ">
        {purchases.map((purchase) => (
          <div key={purchase.id} className="mb-4  shadow-sm">
            <PurchasesItem purchase={purchase} />
          </div>
        ))}
      </Card>
    </Container>
  );
};

export default Purchases;
