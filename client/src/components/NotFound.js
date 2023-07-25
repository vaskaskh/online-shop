import React from 'react'
import styled from 'styled-components/macro';



const NotFound = () => {
  return (
    <NotFoundWrapper>
        <H2>404</H2>
        <P>Page not found!</P>
    </NotFoundWrapper>
  )
}


const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 75vh;
    color: rgb(68,68,68);
`

const H2 = styled.h2`
    font-weight: bolder;
    font-size: 55px;
`

const P = styled.p`
    font-size: 20px;
`



export default NotFound