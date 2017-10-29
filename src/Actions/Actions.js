import {auth, github,google} from '../firebase/constants';

export var login = (userData)=>{
  return{
    type:'LOGIN',
    userData
  };
};
           //WITH SOCIAL
export var startLoginGoogle = ()=>{
  return (dispatch, getState)=>{
      return auth.signInWithPopup(google)
        .then(
          function(result) {
            console.log('Login Worked: ', result);
          })
        .catch(
          function(error) {
            console.log('Login unable: ', error);
          }
        );
    };
};
export var startLoginGitHub = ()=>{
  return (dispatch, getState)=>{
      return auth.signInWithPopup(github)
        .then(
          function(result) {
            console.log('Login Worked: ', result);
          })
        .catch(
          function(error) {
            console.log('Login unable: ', error);
          }
      );
    };
};
          //WITH EMAIL
export var startLoginEmail = (email, password)=>{
  return (dispatch, getState)=>{
      return auth.signInWithEmailAndPassword(email, password)
        .then(
          function(result) {
            console.log('Login Worked: ', result);
            dispatch(loginStat(true));
          })
        .catch(
          function(error) {
            console.log('Login unable: ', error);
            dispatch(loginStat(false));
          }
      );
    };
};
export var createAccount = (email, password)=>{
  return (dispatch, getState)=>{
      return auth.createUserWithEmailAndPassword(email, password)
        .then(
          function(result) {
            console.log('Create Worked: ', result);
            dispatch(loginStat(true));
          })
        .catch(
          function(error) {
            console.log('Create unable: ', error);
            dispatch(loginStat(false));
          }
      );
    };
};
/**************LOGOUT APP*******************/
export var logout = ()=>{
  return{
    type:'LOGOUT',
  };
};
export var logoutFB = ()=>{
  return (dispatch,getState)=>{
   return  auth.signOut().then(function() {
      console.log("Log Out");  // Sign-out successful.
    }, function(error) {
     console.log("Error logout "+error);  // An error happened.
    });
  };
};
