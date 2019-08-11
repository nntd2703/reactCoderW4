import React, { Component } from "react";
import { StyleSheet, ImageBackground, Dimensions, Alert } from "react-native";
import { TODOS } from "../utils/data.js";
import ScrollTodoItem from "../components/ScrollTodoItem.js";
import NotificationPopup from "react-native-push-notification-popup";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
DEFAULT_STATUS = "Active";
DONE_STATUS = "Done";
const URL_IMAGE_BACKGROUND = `https://picsum.photos/id/${Math.floor(
  Math.random() * 1000
)}/${screenWidth}/${screenHeight}?blur=2`;

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "All Todos"
  };
  constructor(props) {
    super(props);
    this.state = {
      todoList: [...TODOS],
      newActivateItem: ""
    };
  }

  handleListChange = itemChanged => {
    const { todoList } = this.state;
    let itemSelected = todoList.find(item => itemChanged.id === item.id);
    itemSelected.status =
      itemSelected.status === DONE_STATUS ? DEFAULT_STATUS : DONE_STATUS;
    todoList[
      todoList.findIndex(item => itemChanged.id === item.id)
    ] = itemSelected;
    this.setState(
      {
        todoList
      },
      () => {
        setTimeout(() => {
          this.props.navigation.navigate("ToDoDetails", {
            updatedTodo: itemChanged
          });
        }, 1000);
      }
    );
  };

  removeItem = itemRemove => {
    const { todoList } = this.state;
    const newList = todoList.filter(item => itemRemove.id !== item.id);
    newList.forEach((item, index) => {
      item.id = index + 1;
    });
    this.setState({
      todoList: [...newList]
    });
  };

  handleRemoveItem = itemRemove => {
    Alert.alert("Delete", "Are you want delete this todo? ", [
      {
        text: "Yes",
        onPress: () => {
          this.removeItem(itemRemove);
        }
      },
      {
        text: "Cancel"
      }
    ]);
  };

  handleSubmitButton = newItem => {
    let { todoList } = this.state;
    const newTodoItem = {
      id: todoList.length + 1,
      status: DEFAULT_STATUS,
      body: newItem
    };
    todoList = [...todoList, newTodoItem];
    this.setState(
      {
        todoList
      },
      () => {
        Alert.alert("Success", "Are you want go to details todo? ", [
          {
            text: "Yes",
            onPress: () => {
              this.props.navigation.navigate("ToDoDetails", {
                updatedTodo: newTodoItem,
                onNavigateBack: this.handleOnNavigateBack
              });
            }
          },
          {
            text: "Cancel"
          }
        ]);
      }
    );
  };

  handleOnNavigateBack = data => () => {
    console.log(data);
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
          keyFilter="all"
          handleSubmitButton={this.handleSubmitButton}
          handleRemoveItem={this.handleRemoveItem}
        />
        <NotificationPopup ref={ref => (this.popup = ref)} />
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
