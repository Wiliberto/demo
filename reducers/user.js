function user(state = {}, action){
    switch(action.type){
        case 'GET_USER_LIST':{
            return{...state, ...action.payload}
        }
        case 'GET_ALBUM_LIST':{
            return{...state, ...action.payload}
        }
        default:
            return state;
    }
}

export default user;