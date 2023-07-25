import React from 'react';
import styled from 'styled-components/macro';
import {FiShoppingCart} from 'react-icons/fi'
import {Link as LinkR} from 'react-router-dom';
import { useSelector } from 'react-redux';


const NavBar = () => {

    const {cartTotalQty} =useSelector((state)=> state.cart);



  return (
    <NavBarWrapper>
     
        <NavBarLeft to={'/'}>
            VS Shop
        </NavBarLeft>

        <NavBarRight>
            <NavCart to={`/cart`}>
                <FiShoppingCart/>
            </NavCart>

            {/* <CounterDiv>
                
            </CounterDiv> */}
        </NavBarRight>
    
    </NavBarWrapper>
  )
}



const NavBarWrapper = styled.div`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    min-height: 8vh;
    background-color: black;
    color: white;
`

const NavBarLeft = styled(LinkR)`

outline: none;
    text-decoration: none;
    color: whitesmoke;

`

const NavBarRight = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    outline: none;
`

const NavCart = styled(LinkR)`

    color: whitesmoke;
    text-decoration: none;
`

const CounterDiv = styled.div`
border-radius: 50%;
    background-color: yellow;
    color: black;
    padding: 7px;

`



export default NavBar