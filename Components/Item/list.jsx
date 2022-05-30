import { StyleSheet, Text, View, TouchableOpacity,TextInput,ScrollView,Button } from "react-native";
import { useState } from 'react';
export default function ToDoList() {

  const [task, Tasks] = useState([
    { t: 'LIke', key: '1' },
    { t: 'Comment', key: '2' },
    { t: 'SubScripe', key: '3' },]
  );

const [t,setText]=useState('');


  const changeEvent=(val)=>{
    setText(val);

  };
  const rem=(key)=>{
   Tasks((previousTasks)=>{return previousTasks.
     filter(todo=>todo.key!=key)})};
const submit=(t)=>{
  if(changeEvent.length==0){}
  else{
  Tasks( 
    (prev)=> {return [
      {t:t,key:((Math.random())).toString()},
      ...prev
    ];
  }
  )}
}


       return (

    <View >


 <Text style={styles.text}>Today's tasks </Text>
 
     <ScrollView   contentContainerStyle={styles.items}> 
   { 
      task.map((e) => (
        
        <TouchableOpacity onPress={() => alert(e.key)} >
          <Text key={e.key}  style={styles.taskStyle} >{e.t}</Text>
          <Button title="del" onPress={()=>{rem(e.key)}}/>
        </TouchableOpacity>
         
      ))}
     

<TextInput
style={styles.in}
placeholder='new . . . .'
onChangeText={changeEvent}
/>
<Button 
title="Add"
onPress={()=>submit(t)}
/>


</ScrollView> 
    </View>
  );
}

const styles = StyleSheet.create({
  taskStyle: {
    margin: 5,
    paddingTop:10,
    padding: 5,
    fontSize: 20,
    backgroundColor: '#fff',
    borderWidth:1,
    borderStyle:'solid',
    borderRadius:10,borderColor:'#fff'

  },text:{
   
    paddingLeft:20,
    paddingTop:24,   
     fontFamily:'Roboto',
     fontSize:21,
     fontWeight:'bold',      
     
  },in:{
    marginTop:10,
    paddingHorizontal:30,
    fontSize: 20,
    backgroundColor: '#fff',
    borderWidth:1,
    borderStyle:'solid',
    borderRadius:10,borderColor:'#fff'
  } ,items: {
  
    paddingHorizontal:10,
    paddingTop:20,
    backgroundColor: '#55BCF6'
  },
    
  
});
