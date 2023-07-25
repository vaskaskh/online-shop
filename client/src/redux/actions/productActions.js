import axios from 'axios'

export const getProducts = ()=>async(dispatch)=>{

    try {
        dispatch({
            type: "PRODUCT_REQUEST"
        });

        const data = await axios.get("http://localhost:5000")

        dispatch({
            type: "PRODUCT_SUCCESS",
            payload: data
        })



    } catch (error) {
            dispatch({
                type: "PRODUCT_ERROR",
                error: error.message
            })
    }   
}