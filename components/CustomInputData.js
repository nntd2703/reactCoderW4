import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

export default class CustomInputData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  handleSubmitButton = () => {
    if (this.state.inputText) {
      this.props.handleSubmitButton(this.state.inputText);
      this.setState({
        inputText: null
      });
    } else {
      Alert.alert("Submit Fail", "Please input new todo", [{ text: "OK" }], {
        cancelable: false
      });
    }
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.inputField}
          placeholder="Please input new todo"
          placeholderTextColor="white"
          value={this.state.inputText}
          onChangeText={text => this.setState({ inputText: text })}
        />
        <View style={styles.submitPanel}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.handleSubmitButton}
            disabled={this.state.inputText === "" ? true : false}
          >
            <Text style={styles.buttonTitle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputField: {
    borderBottomWidth: 1.5,
    borderBottomColor: "white",
    height: 40,
    fontSize: 15,
    color: "white"
  },
  submitPanel: {
    borderWidth: 1.1,
    borderColor: "grey",
    borderRadius: 15,
    marginVertical: 10
  },
  submitButton: {
    paddingVertical: 10,
    alignItems: "center"
  },
  buttonTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600"
  }
});
