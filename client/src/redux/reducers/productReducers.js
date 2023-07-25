export const productReducer = (state={items:[]}, action)=>{
    switch (action.type){
        case "PRODUCT_REQUEST":
            return{
                loading: true,
                items: []
            }
            case "PRODUCT_SUCCESS":
          
            return{
                loading: false,
                items: action.payload
            }
          
            case "PRODUCT_FAIL":
          
            return{
                loading: false,
                error: action.payload
            }
          
            default: 
               return state
    }

}