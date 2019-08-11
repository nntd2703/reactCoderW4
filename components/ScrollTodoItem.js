import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import TodoItem from "../components/TodoItem.js";
import CustomInputData from "./CustomInputData.js";

export default class ScrollTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClickedItem = item => () => {
    const { onTodoListChange, keyFilter } = this.props;
    if (keyFilter === "all") {
      onTodoListChange(item);
    } else {
      Alert.alert(
        "Change Status Fail",
        `The action change status in ${keyFilter} screen is coming soon`,
        [{ text: "OK" }],
        {
          cancelable: false
        }
      );
    }
  };

  handleLongClicked = item => () => {
    const { handleRemoveItem, keyFilter } = this.props;
    if (keyFilter === "all") {
      handleRemoveItem(item);
    } else {
      Alert.alert(
        "Change Status Fail",
        `The action change status in ${keyFilter} screen is coming soon`,
        [{ text: "OK" }],
        {
          cancelable: false
        }
      );
    }
  };

  render() {
    const { todoList, keyFilter } = this.props;
    const cloneTodoList =
      keyFilter !== "all"
        ? [...todoList].filter(item => item.status === keyFilter)
        : [...todoList];
    return (
      <KeyboardAvoidingView
        style={styles.content}
        behavior="padding"
        enabled
        keyboardVerticalOffset={100}
      >
        <ScrollView
          contentContainerStyle={styles.bodyStyle}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ref={ref => (this.scrollView = ref)}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.scrollView.scrollToEnd({ animated: true });
          }}
        >
          {cloneTodoList.map(item => (
            <TodoItem
              key={item.id}
              itemDetails={item}
              itemClicked={this.handleClickedItem(item)}
              itemLongClicked={this.handleLongClicked(item)}
            />
          ))}
          {keyFilter !== "Done" && (
            <CustomInputData
              handleSubmitButton={this.props.handleSubmitButton}
            />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  bodyStyle: {
    alignContent: "center",
    justifyContent: "center"
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: 300
  }
});
