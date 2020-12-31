import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList } from 'react-native';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

class HomeScreen extends React.Component<{}, {CurrentCount : number, TaskList: any[]}>{

  constructor(props : any){
    super(props);
    const {navigation} = props;
    navigation.setOptions({headerRight: this._btnAddTask})
    this.state = {
      CurrentCount : 0,
      TaskList : []
    }
  }

  _btnAddTask = () => {
    return (
      <Button onPress={this._onPress} title="Add" color="#000" />
    );
  }

  _onPress = () => Alert.prompt("Add Something", "Enter Text", (text :string) => this._listcallback(text));

  _listcallback = (text : string) => {
    var newList = this.state.TaskList.concat([{key: '' + this.state.CurrentCount, Title: text}]);
    var newState = {CurrentCount : this.state.CurrentCount + 1, TaskList: newList};
    this.setState(newState);
  }

  render(){
    return (
        <View style={styles.container}>
          <Text style={styles.titleText}>Welcome!</Text>
          <FlatList 
            data={this.state.TaskList}
            renderItem={({item}) => <Text style={styles.titleText}>{item.Title}</Text>}/>
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
