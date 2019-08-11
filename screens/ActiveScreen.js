import React, { Component } from "react";
import { StyleSheet, ImageBackground, Alert, Dimensions } from "react-native";
import { TODOS } from "../utils/data.js";
import ScrollTodoItem from "../components/ScrollTodoItem.js";

const screenWidth = Math.round(Dimensions.get('window').width);  
const screenHeight = Math.round(Dimensions.get('window').height);  

const DEFAULT_STATUS = "Active";
const DONE_STATUS = "Done";
const URL_IMAGE_BACKGROUND = `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/${screenWidth}/${screenHeight}?blur=2`;

export default class ActiveScreen extends Component {
  static navigationOptions = {
    title: "Activate"
  };
  constructor(props) {
    super(props);
    this.state = {
      todoList: [...TODOS]
    };
  }

  handleSubmitButton = item => {
    Alert.alert(
      "Submit Fail",
      "The submit haven't yet release. Please come back to Home Screen to add.\n Press Ok to go Home Screen",
      [
        {
          text: "Ok",
          onPress: () => {
            this.props.navigation.navigate("Home")
          }
        }, 
        {
          text: "Cancel"
        }
      ]
    );
  };

  render() {
    const { todoList } = this.state;
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: URL_IMAGE_BACKGROUND
        }}
      >
        <ScrollTodoItem
          todoList={todoList}
          onTodoListChange={this.handleListChange}
          keyFilter={DEFAULT_STATUS}
          handleSubmitButton={this.handleSubmitButton}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  }
});
