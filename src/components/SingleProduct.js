import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../context/Context'

const SingleProduct = ({ item }) => {
    const { state:{cart}, dispatch} = CartState();
  return (
    <div className='products'>
        <Card>
            <Card.Img variant='top' src={item.image} alt={item.name} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle style={{ paddingBottom : 10}}>
                    <span>$ {item.price}</span>
                    {item.delivery.fastdelivery ? (
                        <div>Fast Delivery</div>
                    ):(
                        <div>4 days delivery</div>
                    )}
                </Card.Subtitle>
                {
                   cart.some((p) => p.id === item.id) ?(
                       <Button onClick={() =>{
                        dispatch({
                            type: 'REMOVE',
                            payload: item
                        })
                    }} variant='danger'>Remove from cart</Button>
                   ):(
                       <Button onClick={() =>{
                           dispatch({
                               type: 'ADD_TO_CART',
                               payload: item
                           })
                       }}>Add to cart</Button>
                   )
                }
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct