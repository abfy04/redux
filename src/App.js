

import ListProduit from './ListProduit';
import Add from './Add';
import { add_product,remove_product } from './TPRedux/Actions';
function App() {

  
   return (
      <div>
         <Add />
         <ListProduit />
         
      </div>
   )

  
}

export default App;
