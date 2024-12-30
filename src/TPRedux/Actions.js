export const ADD_PRODUCT = 'add'
export const DELETE_PRODUCT = 'delete'

export const  add_product=(data)=>(
   { 
        type:ADD_PRODUCT,
        payload:data
    }
)
export const  remove_product=(id)=>(
    { 
        type:DELETE_PRODUCT,
        payload: id
    }
)