import axios from 'axios';
import {USER_LOGIN, USER_SIGNUP, USER_LOGOUT, NEW_POST, GET_POSTS, MY_USER_DETAIL,USER_BY_FILTER,FRIEND_MANAGER,
        GET_BLOG_CATEGORY} from './type';





//get Blog cwtegories and sub categories
export const getBlogCategory = () => dispatch =>{
  axios({
      method: 'get',
      url: GET_BLOG_CATEGORY,
      headers: {
        // 'Authorization':"Token 0997d283d37828b28126eb7d3aa008c647816135"
      }
    }).then((res)=>{
      dispatch({
          type:'GET_BLOG_CATEGORY',
          payload:res.data
      })
    }).catch(err=>console.log(err));    
}

















// login axios call
export const login = (phone,password) => dispatch =>{
    axios(
      
      {
        method: 'post',
        url: USER_LOGIN,
        data: {
          phone: phone,
          password:password 
        }
      }).then((res)=>{
        console.log(res+"hi thisssss is the response");
        dispatch({
            type:'USER_LOGIN',
            payload:[res.data.key,res.status]
        })
      }).catch(err=>{
        dispatch({
            type:'USER_LOGIN',
            payload:[err]
      })});

}


// signup axios call
export const signup = (phone,email,first_name,last_name,password) => dispatch =>{
    axios(
      {
        method: 'post',
        url: USER_SIGNUP,
        data: {
          phone: phone,
          email:email,
          first_name:first_name,
          last_name:last_name,
          password:password,
          profile:{"DOB":"22/12/1998"}
        }
      }).then((res)=>{
        console.log(res+"hi thisssss is the response");
        dispatch({
            type:'USER_SIGNUP',
            payload:[res.status]
        })
      }).catch(err=>{
        dispatch({
            type:'USER_SIGNUP',
            payload:[err]
      })});

}



//logout axios call
export const logout = (csrftokencookie) => dispatch =>{
  
  axios({
      method: 'post',
      url: USER_LOGOUT,
      headers: {
        // 'Authorization':"Token 1c50cb2c1ba47f2b568349689b670d63e6e5ee4d"
        'X-CSRFToken': csrftokencookie
      }, 
      data: {
        
      }
    }).then((res)=>{
      dispatch({
          type:'USER_LOGOUT',
          payload:[res] 
      })
    }).catch(err=>console.log(err));

}



// get Posts axios call
export const getPosts = () => dispatch =>{
  axios({
      method: 'get',
      url: GET_POSTS,
      headers: {
        // 'Authorization':"Token 0997d283d37828b28126eb7d3aa008c647816135"
      }
    }).then((res)=>{
      dispatch({
          type:'GET_POSTS',
          payload:res.data
      })
    }).catch(err=>console.log(err));    
}


//get myUserDetail axios call
export const myUserDetail = () => dispatch =>{
  axios({
      method: 'get',
      url: MY_USER_DETAIL,
      headers: {
        // 'Authorization':"Token 0997d283d37828b28126eb7d3aa008c647816135"
      }
    }).then((res)=>{
      dispatch({
          type:'MY_USER_DETAIL',
          payload:res.data
      })
    }).catch(err=>console.log(err));    
}

//get userByFilter axios call
export const userByFilter = (data,csrftokencookie) => dispatch =>{
  
  axios({
      method: 'post',
      url: USER_BY_FILTER,
      headers: {
        // 'Authorization':"Token 1c50cb2c1ba47f2b568349689b670d63e6e5ee4d"
        'X-CSRFToken': csrftokencookie
      }, 
      data: {
        data:data
      }
    }).then((res)=>{
      dispatch({
          type:'USER_BY_FILTER',
          payload:res.data
      })
    }).catch(err=>console.log(err));

}

//action for selected user from search box
export const selectUser = (user) => {
  return {
      type: 'USER_SELECTED',
      payload: user
  }
};

//get FriendManager axios call
export const FriendManager = () => dispatch =>{
  axios({
      method: 'get',
      url: FRIEND_MANAGER,
      headers: {
        // 'Authorization':"Token 0997d283d37828b28126eb7d3aa008c647816135"
      }
    }).then((res)=>{
      dispatch({
          type:'FRIEND_MANAGER',
          payload:res.data
      })
    }).catch(err=>console.log(err));    
}
