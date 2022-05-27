import React from "react";
import {SafeAreaView, TouchableOpacity} from "react-native";
import {Div, Icon, ScrollDiv, Text} from "react-native-magnus";
import {titleColor, titleFontSize} from "../../constants/title";
import {OnlyNavigationProps} from "../../constants/models";
import {standardStyles} from "../../constants/styles";
import {AcceptedQuestCarousel} from "./AcceptedQuestCarousel";
import {PublishedQuestCarousel} from "./PublishedQuestCarousel";
import {styles} from "./style";

export const QuestScreen = (props: OnlyNavigationProps) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={standardStyles.container}>
      <ScrollDiv flex={1} bg="white" px="lg" py="sm">
        <Div flexDir="row" justifyContent="space-between" px="sm">
          <Div borderWidth={1} borderColor="gray500" rounded="sm" p="md">
            <Text>Special Events</Text>
            <Text>50% exp up</Text>
            <Text>04 Jun - 10 Jun</Text>
          </Div>
          <Text>Balance: 100</Text>
        </Div>
        <Div pt="md">
          <Text color={titleColor} fontSize={titleFontSize} fontWeight="bold" px="sm">
            Accepted Quests
          </Text>
          <AcceptedQuestCarousel navigation={navigation} />
        </Div>
        <Div pt="sm">
          <Text color={titleColor} fontSize={titleFontSize} fontWeight="bold" px="sm">
            Published Quests
          </Text>
          <PublishedQuestCarousel navigation={navigation} />
        </Div>
        <Div pt="sm" px="lg" flexDir="row" justifyContent="space-around">
          <TouchableOpacity
            style={styles.questButton}
            onPress={() => {
              navigation.navigate("QuestBoard");
            }}>
            <Icon fontFamily="FontAwesome" name="handshake-o" fontSize={24} color="green600" />
            <Text fontSize="text200" textAlign="center">
              Take {"\n"}Quest
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.questButton}>
            <Icon fontFamily="MaterialCommunityIcons" name="note-edit-outline" fontSize={24} color="green600" />
            <Text fontSize="text200" textAlign="center">
              Publish Quest
            </Text>
          </TouchableOpacity>
        </Div>
      </ScrollDiv>
    </SafeAreaView>
  );
};
