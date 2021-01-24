import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList } from 'react-native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

interface IState {
  CurrentCount: number;
  TaskList: any[];
}

interface IProps {
  navigation: StackNavigationProp<any, any>;
}

class HomeScreen extends Component<IProps, IState> {
  navigation: StackNavigationProp<any, any>;

  constructor(props: IProps) {
    super(props);
    console.log(props);
    this.navigation = props.navigation;
    this.state = {
      CurrentCount: 0,
      TaskList: [],
    };
  }

  componentDidMount() {
    var options = {
      headerRight: () => foo(this._mySetState),
    };
    this.navigation.setOptions(options);
  }

  _mySetState = (text: string) => {
    var newTask = { key: '' + this.state.CurrentCount, Text: text };
    var newData = this.state.TaskList.concat([newTask]);
    var newState = {
      CurrentCount: this.state.CurrentCount + 1,
      TaskList: newData,
    };

    this.setState(newState);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}></Text>
        <FlatList data={this.state.TaskList} renderItem={ListItem} />
      </View>
    );
  }
}

function ListItem({ item }: any) {
  return <Text style={{ color: '#fff' }}>{item.Text}</Text>;
}

function foo(callback: (text: string) => void) {
  return (
    <Button
      title="Add"
      onPress={() => Alert.prompt('Hey', undefined, callback)}
    />
  );
}

export default function RoutineBanner() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#ffff',
  },
});
