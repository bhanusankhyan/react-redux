
import React from 'react'
import { createStore, dispatch } from 'redux'
import { Provider,connect } from 'react-redux'




const initialState = {}



class FrontPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {username:""}
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  
  }
  

  
 
  onSubmit(e){
    e.preventDefault()
   console.log("in button")
   const username = this.state.username
   fetch("https://api.github.com/users/"+username+"/repos")
        .then ((response) => response.json())
        .then((responseJson) =>{
             alert(responseJson[0].owner['login'])
             for(var i=0;i<responseJson.length;i++){
              initialState[i] = {
                 "name":responseJson[i]['name'],
                  "url": responseJson[i]['html_url']
                  
                  
               }
               
               this.props.dispatch({type : "Process", payload_name : initialState[i].name, payload_url : initialState[i].url }) 
               
             }

        
        })
   

    }
 onChange(e){
     
     this.setState({username:e.target.value})
 }


    
    
    renderData(){
      const { data } = this.props;
      return(
        <ul>
          {
            data.map(items => {
              return(
                <div>
                  <li>Repository Name : {items.name}
                    </li>
                    <li>URL : {items.url}
                    </li>
                    <hr />
                  </div>
              )
            })
          }
          </ul>
      )
    }
    
   

  
  render(){
    
    return( 
     
      <div >
        <form onSubmit={this.onSubmit}>
        <input onChange={this.onChange} type="text"  />
        <button type="submit"> Enter </button>
        </form>
        {this.renderData() }
        
        </div>
        
    )
  }
}


function mapStateToProps(state) {
  
   //console.log(state)
   return{
     data: state
   }
  }
export default connect(mapStateToProps)(FrontPage)
