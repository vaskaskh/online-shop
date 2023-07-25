import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {BsArrowLeft} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, removeAllItems, decreaseCartQty, addToCart, getTotal } from '../features/cartSlice';
import { useEffect } from 'react';


const Cart = () => {

  const {cartItems} = useSelector((state)=> state.cart);;
  const {cartTotalAmount} = useSelector((state)=> state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();




  const handleCartRemove = (item)=>{
    dispatch(removeFromCart(item));
  }

  const handleRemoveAllItems = ()=>{
    dispatch(removeAllItems());

    navigate('/')
  }

  const handleDecrease = (item)=>{
    dispatch(decreaseCartQty(item))
  }

  const handleIncrease =(item)=>{
    dispatch(addToCart(item))
  };


  useEffect(()=>{
    dispatch(getTotal())
  },[dispatch, cartItems])



  return (

    <>
    <h1 style={{textAlign:"center", marginTop:"10px"}}>Shopping Cart</h1>
    {cartItems.length === 0 ?(
      <div style={{padding:"25px"}}>
          <div>Your cart is currently empty</div>
        <br/>
          <Link to ="/"  style={{display:"flex", alignItems:"center", textDecoration:"underline", color:"black"}}>
            <BsArrowLeft style={{marginRight:"5px"}}/>
            <span>Start Shopping</span>
          </Link>
      </div>
    ):(
      <MainCartWrapper>

      <TopInfoWrapper>
            <TopInfo>
                <div style={{width:"45%"}}>
                  <h4>PRODUCT</h4>
                </div>

                <MiddleComponent style={{width:"40%"}}>
                  <h4>PRICE</h4>
                  
                  <h4>QUANTITY</h4>
                </MiddleComponent>

                <div style={{width:"5%"}}>
                  <h4>TOTAL</h4>
                </div>
            </TopInfo>
         
         <div>

          </div>
      </TopInfoWrapper>

  <div style={{borderBottom:"1px solid lightgray", margin:"0 25px"}}/>
      <ItemInfoWrapper>
          {
            cartItems.map((item)=>(
              <CartItemsMainWrapper key={item.id}>
                <ImageWrapper>
                  <IMAGE 
                    src={item.image}
                    alt={item.name}
                  />
                   <div style={{display:"flex", flexDirection:"column", gap:"20px",padding:"45px"}}>
                      <h5>{item.name}</h5>
                      <span>{item.description}</span>
                      <span
                      onClick={()=>handleCartRemove(item)}
                      style={{cursor:"pointer"}}>Remove</span>
                    </div>
                </ImageWrapper>

           

                <MM style={{display:"flex",gap:"60px", width:"40%"}}>
                  <h2>${item.price}</h2>
                  <div className='styleMM' style={{display:"flex", backgroundColor:"white", alignItems:"center", justifyContent:"center"}}>
                    <button onClick={()=> handleDecrease(item)} >-</button>
                    <div>{item.cartQTy}</div>
                    <button onClick ={ ()=> handleIncrease(item)}>+</button>
                  </div>
                </MM>

             


                <div style={{width:"5%", display:"flex", alignItems:"center"}}>
                  <h2>${item.cartQTy * item.price} </h2>
                </div>



              </CartItemsMainWrapper>




              
            ))
          }

<div style={{borderBottom:"1px solid lightgray", margin:"0 25px"}}/>
      </ItemInfoWrapper>




      


      
      <CheckoutBoxWrapper>
        <ClearBox onClick={()=> handleRemoveAllItems()}>
            Clear Cart
        </ClearBox>

        <TotalBoxWrapper>
          <SubtotalInfo>
            <h5>Subtotal</h5>
         
                  <h2> ${cartTotalAmount}</h2>
          </SubtotalInfo>

          <div>
            <span style={{color:'gray'}}>Taxes and shipping calculated at checkout</span>
          </div>

          <CheckOutButton>
            <button>Check Out</button>
          </CheckOutButton>

          <Link to ="/"  style={{display:"flex", alignItems:"center", textDecoration:"none", color:"black"}}>
            <BsArrowLeft style={{marginRight:"5px"}}/>
            <span>Continue Shopping</span>
          </Link>
        </TotalBoxWrapper>
      </CheckoutBoxWrapper>

  </MainCartWrapper>
    )}
   
    </>
  )
}


const MM = styled.div`
  align-items: center;
  & button{
    height: fit-content;
    width: fit-content;
    background-color:white;
    border:black;
    margin: 0 15px;
    cursor: pointer;
    font-size: 20px;
  }

  .styleMM{
    border: 1px solid black;
    background-color: white;
    padding: 10px 20px;
    border-radius: 10px;
  }
`


const MainCartWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;

`

const TopInfoWrapper = styled.div`


`

const TopInfo = styled.div`
  display: flex;  
  justify-content: space-between;
  padding: 45px;
`
const MiddleComponent = styled.div`
display: flex;
gap: 60px;
`

const ItemInfoWrapper = styled.div`

`

const CartItemsMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 45px;
`

const ImageWrapper = styled.div`
  display: flex;
  width: 45%;


`

const IMAGE = styled.img`
  width: 35%;
  object-fit: contain;
`

const TotalBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 15%;
`

const SubtotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ClearBox = styled.div`
  border: 1px solid gray;
  height: fit-content;
  width: fit-content;
  padding: 15px 25px;
  cursor: pointer;
  border-radius: 10px;
`


const CheckoutBoxWrapper = styled.div`
  display: flex;
  padding: 45px;
  justify-content: space-between;
`

const CheckOutButton = styled.div`
  display: flex;
 & button{
  width: 100%;
  background-color:#3F64CE ;
  padding: 10px;
  color: white;
  border: black;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
 }
`





export default Cart;