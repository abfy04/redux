
import { ADD_PRODUCT,DELETE_PRODUCT } from "./Actions";
const initialState = {
    produits:
    [
        {code:1,designation:'produit1',prix:300},
        {code:2,designation:'produit2',prix:230}
    ]
}
function reducer(state=initialState,action){
     switch (action.type) {
        case ADD_PRODUCT:
            
             return {...state,produits:[...state.produits, action.payload]}
        case DELETE_PRODUCT:
            const newProduits = state.produits.filter((el)=>el.code !== action.payload)
            return {...state,produits:newProduits}
           
     
        default:
            break;
     }
}

 export default reducer