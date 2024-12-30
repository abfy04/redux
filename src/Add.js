import { add_product } from "./TPRedux/Actions";
import { useDispatch } from "react-redux";
export default function Add (){
    const dispatch = useDispatch()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const {code,designation,prix} = document.forms[0]
        
        const produit  = {code:code.value,designation:designation.value,prix:prix.value}
        dispatch(add_product(produit))
    }
    return (
        <form onSubmit={handleSubmit}>
           
           <label>Code : </label><br/>
           <input type="number" name="code" /><br/> 
           <label>designation : </label><br/>
           <input type="text" name="designation" /><br/>
           <label>prix : </label><br/>
           <input type="number" name="prix" /><br/>
           <button>Add Produit</button>
           

        </form>
    )
}