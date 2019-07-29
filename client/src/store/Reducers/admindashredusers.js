const  consultingservicereducers = ((state = {data:{}}, action) => {
  
    switch (action.type) {


        case 'consultingservice':
    
            return {...state, ...action.payloed}
                  
        default:
            return state



    }


})
 export  default consultingservicereducers;