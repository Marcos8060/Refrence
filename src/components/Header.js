import React from 'react'
import { Badge, Container, Dropdown, FormControl, Navbar, Nav,Button } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {CartState} from '../context/Context'
import { AiFillDelete} from 'react-icons/ai'

const Header = () => {
    const { state:{cart}, dispatch,productDispatch} = CartState();
  return (
      <Navbar bg='dark' variant='dark' style={{ height: 80}}>
          <Container>
              <Navbar.Brand>
                  <Link to='/'>Shopping Cart</Link>
              </Navbar.Brand> 
              <Navbar.Text className='search'>
                  <FormControl
                  placeholder='search a product'
                  style={{ width: 400}}
                  className='me-auto'
                  onChange={(e) => {
                    productDispatch({
                      type: "FILTER_BY_SEARCH",
                      payload: e.target.value,
                    });
                  }}
                   />
              </Navbar.Text>
              <Nav>
                  <Dropdown alignright="true">
                      <Dropdown.Toggle variant='success'>
                          <FaShoppingCart color='white' fontSize='24px ' />
                          <Badge>{cart.length}</Badge>
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{ minWidth: 300}}>
                          {cart.length > 0 ? (
                              <>
                               {cart.map((item) =>(
                                   <span className='cartitem' key={item.id}>
                                       <img className='cartItemImg' src={item.image} alt={item.name} />
                                       <div className="cartItemDetail">
                                           <span>{item.name}</span>
                                           <span>{item.price}</span>
                                       </div>
                                       <AiFillDelete
                                       fontSize='20px'
                                       style={{ cursor: 'pointer'}}
                                       onClick={()=>{
                                           dispatch({
                                               type: 'REMOVE',
                                               payload: item
                                           })
                                       }}
                                        />
                                   </span>
                                ))}
                                <Link to='/cart'>
                                  <Button style={{width:'94%',margin: '0 10px'}}>
                                      Go to cart
                                  </Button>
                                </Link>
                              </>
                          ):(
                          <span style={{ padding: 10}}>Cart is Empty</span>
                          )}
                      </Dropdown.Menu>
                  </Dropdown>
              </Nav>
          </Container>
      </Navbar>
  )
}

export default Header
