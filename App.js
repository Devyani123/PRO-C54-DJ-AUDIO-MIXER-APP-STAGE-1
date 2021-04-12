import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';
 
 class Redbutton extends React.Component{
   render()
   {
    return(
<View style={{marginTop:100,width:100,justifyContent:'centre', alignSelf:'centre'}} > 

<Button title={this.props.title} color={this.props.color}/>

</View>
    )

   }
 }

export default class App extends React.Component{
  render(){
    return(
<View style={{marginTop:100,width:100,justifyContent:'centre', alignSelf:'centre',margin:100}}>
  <Button title='sound1' color='red'/>

   <Button title='sound2' color='green'/>
   
   <Button title='sound3' color='blue'/>
</View>
    )
  }
  

}




