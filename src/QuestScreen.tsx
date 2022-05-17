import React from "react";
import {SafeAreaView} from "react-native";
import {Div, Text} from "react-native-magnus";

export function QuestScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Div flex={1}>
        <Div p="sm">
          <Text fontSize="text600">Balance</Text>
        </Div>
      </Div>
    </SafeAreaView>
  );
}
