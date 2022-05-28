import React from "react";
import {SafeAreaView, TextInput} from "react-native";
import {Div, Icon, ScrollDiv} from "react-native-magnus";
import {OnlyNavigationProps} from "../../constants/models";
import {standardStyles} from "../../constants/styles";
import {Quest} from "./Quest";
import {styles} from "./style";

export function QuestBoardScreen(props: OnlyNavigationProps) {
  const {navigation} = props;

  return (
    <SafeAreaView style={standardStyles.container}>
      <Div flex={1} bg="white" px="lg" py="sm">
        <Div shadow={"sm"} p="lg" bg="white" row justifyContent="space-between" rounded={"sm"} m="sm">
          <TextInput placeholder="search" style={styles.searchInput} />
          <Icon fontFamily="FontAwesome5" name="searchengin" fontSize={16} color="teal700" />
        </Div>
        <Div my="md">
          {/* add contentContainerStyle to make scrollDiv can scroll to bottom  */}
          <ScrollDiv showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 60}}>
            {[0, 1, 2, 3, 4, 5, 6].map((e) => {
              return (
                <Quest
                  navigation={navigation}
                  colors={e % 4 === 2 ? "blue" : e % 4 === 3 ? "green" : "white"}
                  key={e}
                  number={e}
                />
              );
            })}
          </ScrollDiv>
        </Div>
      </Div>
    </SafeAreaView>
  );
}
