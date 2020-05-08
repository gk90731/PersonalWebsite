/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = [], action) {
    switch (action.type) {
        case 'GET_BLOG_CATEGORY': //get blog category n sub category reducer
            return {
                ...state,
                GET_BLOG_CATEGORY:action.payload};
            break;


        // ********************************************
        case 'MY_USER_DETAIL': //get myUserDetail reducer
            return {
                ...state,
                MY_USER_DETAIL:action.payload};
            break;
        case 'USER_SELECTED': //get myUserDetail reducer
            return {
                ...state,
                USER_SELECTED:action.payload};
            break;
    }
    return state;
}