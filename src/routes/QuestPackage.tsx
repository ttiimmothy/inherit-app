import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {TouchableOpacity} from "react-native";
import {Icon} from "react-native-magnus";
import {Props} from "../constants/models";
import {DetailScreen} from "../views/DetailScreen";
import {QuestScreen} from "../views/QuestScreen";

const QuestStack = createStackNavigator();

export function QuestPackage(props: Props) {
  const {navigation} = props;
  return (
    <QuestStack.Navigator initialRouteName="QuestFirst">
      <QuestStack.Screen name="QuestFirst" component={QuestScreen} />
      <QuestStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="arrowleft" fontFamily="AntDesign" fontSize={24} p="md" color="teal700" />
            </TouchableOpacity>
          ),
        }}
      />
    </QuestStack.Navigator>
  );
}
