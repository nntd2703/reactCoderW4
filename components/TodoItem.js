import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { itemDetails, itemClicked, itemLongClicked } = this.props;
    const customBackground = {
      backgroundColor: itemDetails.status === "Done" ? "blue" : "green"
    };
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.buttonStyle, customBackground]}
          onPress={itemClicked}
          onLongPress={itemLongClicked}
        >
          <Text style={styles.itemTitle}>
            {itemDetails.id} : {itemDetails.body}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  buttonStyle: {
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    borderRadius: 10,
    backgroundColor: "blue",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  itemTitle: {
    paddingVertical: 10,
    alignContent: "center",
    color: "white",
    fontWeight: '600'
  }
});
