import React, { useEffect, useState } from "react";
import { ListGroup, Button, Col, Row, Form, Image } from "react-bootstrap";
import { CartState } from "../context/Context";
import { AiFillDelete} from 'react-icons/ai'


const Cart = () => {
  const {
    state: { cart },
    dispatch
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item key={item.id}>
              <Row>
                <Col md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{item.name}</span>
                </Col>
                <Col md={2}>
                  <span>{item.price}</span>
                </Col>
                <Col md={2}>
                  <span>{item.ratings}</span>
                </Col>
                <Col md={2}>
                  <Form.Control as="select" value={cart.length}
                  onChange={(e)=> 
                    dispatch({
                        type: 'CHANGE_CART_QTY',
                        payload:{
                            id: item.id,
                            qty: e.target.value
                        }
                    })
                  }
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>7</option>
                    <option>8</option>
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                   type="button"
                   variant='light'
                    onClick={() => {
                      dispatch({
                        type: "REMOVE",
                        payload: item,
                      });
                    }}
                  >
                      <AiFillDelete />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Sub total {cart.length} items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
