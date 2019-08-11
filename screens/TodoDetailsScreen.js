import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { HeaderBackButton } from "react-navigation";
import { TextInput } from "react-native-gesture-handler";

let windowSize = Dimensions.get("window");

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.navigation.state.params.updatedTodo
    };
  }

  render() {
    const { item } = this.state;
    const text =  this.props.navigation.getParam('updatedTodo', 'nothing sent');
    console.log(text);
    const handleOnNavigateBack = this.props.navigation.getParam(
      "handleOnNavigateBack",
      () => {}
    );

    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Please input new todo"
          placeholderTextColor="white"
          value={item.body}
          onChangeText={text =>
            this.setState({
              item: {
                id: item.id,
                body: text,
                status: item.status
              }
            })
          }
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleOnNavigateBack(this.state.item);
            this.props.navigation.goBack();
          }}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    elevation: 2, // Android
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  input: {
    width: windowSize.width - 70,
    color: "#555555",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    height: "30%",
    borderColor: "#6E5BAA",
    borderWidth: 1,
    borderRadius: 2,
    alignSelf: "center",
    backgroundColor: "#ffffff"
  }
});
