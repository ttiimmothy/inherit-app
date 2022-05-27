import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {TouchableOpacity} from "react-native";
import {Icon} from "react-native-magnus";
import {OnlyNavigationProps} from "../constants/models";
import {DetailScreen} from "../views/DetailScreen";
import {QuestBoardScreen} from "../views/QuestBoardScreen/QuestBoardScreen";
import {QuestScreen} from "../views/QuestScreen/QuestScreen";

const QuestStack = createStackNavigator();

export function QuestPackage(props: OnlyNavigationProps) {
  const {navigation} = props;
  const options = {
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrowleft" fontFamily="AntDesign" fontSize={24} p="md" color="teal700" />
      </TouchableOpacity>
    ),
  };

  return (
    // need to have initialRouteName to eliminate warning
    <QuestStack.Navigator initialRouteName="QuestFirst">
      <QuestStack.Screen name="Quest" component={QuestScreen} />
      <QuestStack.Screen name="Detail" component={DetailScreen} options={options} />
      <QuestStack.Screen name="QuestBoard" component={QuestBoardScreen} options={options} />
    </QuestStack.Navigator>
  );
}
