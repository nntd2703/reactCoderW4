import React from "react";
import { Platform, Button } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ActiveScreen from "../screens/ActiveScreen";
import CompleteScreen from "../screens/CompleteScreen";
import TabBarIcon from "../components/TabBarIcon";
import TodoDetailsScreen from "../screens/TodoDetailsScreen";
const config = {
  headerMode: "none"
};

const CompleteStack = createStackNavigator({
  Complete: CompleteScreen
});

CompleteStack.navigationOptions = {
  tabBarLabel: "Complete",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-done-all" : "md-link"}
    />
  )
};

CompleteStack.path = "";

const ActiveStack = createStackNavigator({
  Active: ActiveScreen
});

ActiveStack.navigationOptions = {
  tabBarLabel: "Active",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-today" : "md-link"}
    />
  )
};

ActiveStack.path = "";

const ToDoDetailsStack = createStackNavigator(
  {
    ToDoDetails: TodoDetailsScreen
  },
  config
);

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  ToDoDetailsStack
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "md-link"}
    />
  )
};

HomeStack.path = "";

const TabNavigator = createBottomTabNavigator(
  {
    Active: ActiveStack,
    Home: HomeStack,
    Complete: CompleteStack
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(TabNavigator);
