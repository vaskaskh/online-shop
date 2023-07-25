import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { productsFetch } from '../features/productSlice';
import styled from 'styled-components/macro';
import { addToCart } from '../features/cartSlice';
import {useNavigate} from 'react-router-dom';

// import { getProducts } from '../redux/actions/productActions';


const Home = () => {


    const navigate = useNavigate();

   const {items, loading,error} = useSelector((state)=> state.products)



  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(productsFetch())
},[dispatch])


const handleAddToCart = (product)=>{
  dispatch(addToCart(product))
  navigate("/cart")
}


  return (
    <>
    {
      loading?(
        <div>
          LOADING...
        </div>
      ): error? (
        <div>
          ERROR
        </div>
      ):(
        <HomeWrapper>
        <h2 style={{marginBottom:"20px"}}>New Arrivals</h2>
        <SingleItemContainer>
          {items?.map(item=>(
            <ContainerBox key={item.id}>
             
              <NameContainer>
                {item.name}
              </NameContainer>
              <ImageContainer>
                <img
                src={item.image}
                alt={item.name}
                />
              </ImageContainer>
    
              <DescriptionWrapper>
                  <div>{item.description}</div>
                  <div>${item.price}</div>
              </DescriptionWrapper>
    
              <ButtonWrapper>
                <button onClick={()=> handleAddToCart(item)}>Add To Cart</button>
              </ButtonWrapper>
            
            </ContainerBox>
          ))}
        </SingleItemContainer>
        </HomeWrapper>
      )
    }
    </>


   
  )
}


const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`

const SingleItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  gap:70px;
  max-width: 80vw;
`

const ContainerBox = styled.div`
  border: 1px solid black;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 1px 1px 17px 10px lightgray;
  flex: 1;
  max-width: 390px;

`
const NameContainer = styled.div`
  font-weight: bolder;
`
const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-top: 20px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & button{
  cursor: pointer;
  padding: 15px;
  background-color: #385ab8;
  color: white;
  border: black;
  border-radius: 15px;
  width: 100%;
  }
`

const ImageContainer =styled.div`
  min-width:290px ;
  & img{
    width: 270px;
  }
`

export default Home