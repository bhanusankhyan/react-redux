import React from 'react'
import Link from 'gatsby-link'
import FrontPage from '../components/frontPage'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
const initialState = []
const store = createStore(data);
const reminder = (action) => {
  return{
    url : action.payload_url,
    name : action.payload_name
  }
}
class IndexPage extends React.Component{
  render(){
    return(<Provider store={store}>
      
      <FrontPage />
    </Provider>);
  }
}
function data (state = initialState,action){
     let data = null 
     switch (action.type){
       case 'Process':
       
         state = [...state, reminder(action)];
         console.log(state)
         return state
        default:
            return state      
      }}
      
    // }
    
     
  

export default IndexPage
