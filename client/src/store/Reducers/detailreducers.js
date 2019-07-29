const detailFormReducers = ((state = {data:{}}, action) => {
  
    switch (action.type) {


        case 'detailaction':
    
            return {...state, ...action.payloed}
                  
        default:
            return state



    }


})
 export  default detailFormReducers;