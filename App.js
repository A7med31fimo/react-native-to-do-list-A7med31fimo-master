import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import ToDoList from './Components/Item/list';
export default () => {

  return (
    <View style={styles.container}>  
      <ToDoList/>
    <StatusBar style='auto' />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AFAFAF',
    paddingHorizontal:10
  }
});
