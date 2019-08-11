import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { TODOS } from "../utils/data.js";
import ScrollTodoItem from "../components/ScrollTodoItem.js";

const screenWidth = Math.round(Dimensions.get('window').width);  
const screenHeight = Math.round(Dimensions.get('window').height);  
DEFAULT_STATUS = "Active";
DONE_STATUS = "Done";
const URL_IMAGE_BACKGROUND = `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/${screenWidth}/${screenHeight}?blur=2`;

export default class CompleteScreen extends Component {
 static navigationOptions = {
    title: "Done"
  };
  constructor(props) {
    super(props);
    this.state = {
      todoList: [...TODOS]
    };
  }

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
          keyFilter={DONE_STATUS}
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
