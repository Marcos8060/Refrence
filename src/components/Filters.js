import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartState } from '../context/Context'

const Filters = () => {
  const { productState: { sort },productDispatch,searchQuery } = CartState();
  console.log(searchQuery);
  return (
    <div className='filters'>
        <span className="title">Filter Products</span>
        <span>
            <Form.Check
            inline
            label='Ascending'
            name='group1'
            type='radio'
            id={`inline-1`}
            onChange={()=>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh"
              })
            }
            checked = {sort === 'lowToHigh' ? true : false }
             />
        </span>
        <span>
        <Form.Check
            inline
            label='Descending'
            name='group1'
            type='radio'
            id={`inline-2`} 
            onChange={()=>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow"
              })
            }
            checked = {sort === 'highToLow' ? true : false }
             />
        </span>
        <span>
        <Form.Check
            inline
            label='Include out of stock'
            name='group1'
            type='checkbox'
            id={`inline-3`} 
             />
        </span>
        <span>
        <Form.Check
            inline
            label='Fast Delivery Only'
            name='group1'
            type='checkbox'
            id={`inline-4`} 
             /> 
        </span>
        <Button variant='light'
        onClick={()=>
          productDispatch({
            type: "CLEAR_FILTERS"
          })
        }
        >Clear Filters</Button>
    </div>
  )
}

export default Filters