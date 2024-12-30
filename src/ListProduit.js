import { useDispatch,useSelector } from 'react-redux'
import React from 'react';
import { remove_product } from './TPRedux/Actions'
 const  ListProduit =()=>{
   const products = useSelector(state => state.produits );
   const dispatch = useDispatch()
   const handleDelete=(code)=>{
      dispatch(remove_product(code))
   }
    return (
      products.length ? 
       
           <table>
              <tr>
                 <th>code</th>
                 <th>designation</th>
                 <th>prix</th>
                 <th>action</th>
              </tr>
              {
              products.map(el => (
                 <tr>
                    <td>{el.code}</td>
                    <td>{el.designation}</td>
                    <td>{el.prix}</td>
                    <td>
                       <button onClick={()=>handleDelete(el.code)}>Delete</button>
                    </td>
                 </tr>

              ))
              }
           </table>
           :
           <p>Acune data</p>
       
    )
}
export default ListProduit