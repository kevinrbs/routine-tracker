import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();
const headerOptions = {
  headerRight: () => <TaskComponent/>
};

class TaskComponent extends React.Component{
  _onPress = () => Alert.prompt("Hey");
  render(){
    return (
      <Button onPress={this._onPress} title="Add" color="#000"/>
    );
  }
}

class HomeScreen extends React.Component {

  constructor(props : any){
    super(props);
    this.state = {
      TaskList : [{key: 1, Title:"Task 1"}, {key: 2, Title: "Task 2"}]
    }
  }

  render(){
    return (
      <View>
        <View style={styles.container}>
          <Text style={{alignItems: "center"}}>Welcome!</Text>
          {/* <FlatList 
            data={[{key: 1, Title:"Task 1"}, {key: 2, Title: "Task 2"}]}
            renderItem={({item}) => <Text>{item.Title}</Text>}/> */}
        </View>
      </View>
    );
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    color:'#ffff'
  }
});
