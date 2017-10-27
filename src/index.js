import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {auth} from './Firebase/constants';
import {configureStore} from './Store/store';
import {login,logout} from './Actions/Actions';
import {HashRouter} from 'react-router';

//Router
import Router from './router';

//Material UI configs
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {indigo600, indigo800, indigoA700,grey100, grey400, grey500,white, darkBlack} from 'material-ui/styles/colors';

// File directory
import { IndexCss } from './directory';
// Main Route pending change
import { Home } from './Views/Home';

import registerServiceWorker from './registerServiceWorker';

//router history
import createHashHistory from 'history/createHashHistory';

//import injectTapEventPlugin from 'react-tap-event-plugin';
/*  Nee to fix this dang bug, lib problem with react 16.
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();*/

const history = createHashHistory();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo600,
    primary2Color: indigo800,
    primary3Color: grey400,
    accent1Color: indigoA700,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white
  }
});

var store = configureStore();

auth.onAuthStateChanged(function(user){
   var auxPhoto="https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FScreenshot_20170302-203202.png?alt=media&token=3c589ec6-cab6-43ec-b4b4-38d502d8c079";
   var location=(window.location.href);
   var indexLoc=location.indexOf('/#/') ;
   var routeLoc=location.substring(indexLoc);

   if(user){
     var userData ={uid:user.uid,
        email:user.email,
        displayName:user.displayName!==null?user.displayName:(user.email).substring(0, 9)+"...",
        photoURL:user.photoURL!==null?user.photoURL:auxPhoto,
        provider:user.providerData[0]['providerId']
      };
    console.log(user);
    //history.replace('/app');

  }else{
    console.log("Not Login");
  }

});
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}><Router/></MuiThemeProvider>
</Provider>,
   document.getElementById('root'));
registerServiceWorker();
