import {SafeAreaView, StyleSheet} from "react-native";
import React from "react";
import {Div, Icon, ScrollDiv, Text} from "react-native-magnus";
import moment from "moment";
import {screenWidth} from "../utils/screen";
import {OnlyNavigationProps} from "../constants/models";
import {TouchableOpacity} from "react-native-gesture-handler";
import {bailColor, gray500, prizeColor, starsColor} from "../constants/colors";
import {standardStyles} from "../constants/styles";
import {titleColor, titleFontSize} from "../constants/title";

export function DetailScreen(props: OnlyNavigationProps) {
  const {navigation} = props;

  return (
    <SafeAreaView style={standardStyles.container}>
      <ScrollDiv flex={1} bg="white" px="lg" py="sm">
        <Text fontSize={titleFontSize} color={titleColor} textAlign="center" fontWeight="bold">
          Send Quest
        </Text>
        <Div row justifyContent="center" pt="sm">
          <Div rounded="md" p="md" borderWidth={1} borderColor="gray500">
            <Text>Your application has been sent. You will know the application is accepted or not soon.</Text>
          </Div>
        </Div>
        <Div row p="md" justifyContent="space-between">
          <Div>
            <Div row alignItems="center">
              <Text mr={2}>Difficulty</Text>
              {[0, 1, 2, 3, 4].map((index) => {
                return <Icon name="staro" fontFamily="AntDesign" fontSize={16} color={starsColor} key={index} />;
              })}
            </Div>
            <Text mt={5}>Publisher: Test user 1</Text>
          </Div>
          <Div>
            <Text>Publish date: {moment(new Date()).format("DD MMM YYYY")}</Text>
            <Text mt={5}>Publish date: {moment(new Date()).format("DD MMM YYYY")}</Text>
          </Div>
        </Div>
        <Div rounded="md" m="lg" p="md" borderWidth={1} borderColor="gray700">
          <Text textAlign="center" fontSize="text400" color="gray600">
            Quest 1
          </Text>
          <Div rounded="md" m="lg" p="md" borderWidth={1} borderColor="gray500" minH={screenWidth * 0.6}>
            <Text>Write whatever you want</Text>
          </Div>
          <Div row justifyContent="space-between" p="md">
            <Text fontSize="text300" color={bailColor}>
              Bail: $20
            </Text>
            <Text fontSize="text300" color={prizeColor}>
              Prize: $100
            </Text>
          </Div>
        </Div>
        <Div row px="lg" py="md" justifyContent="center">
          <TouchableOpacity style={styles.button}>
            <Text textAlign="center" color="white">
              Talk to publisher
            </Text>
          </TouchableOpacity>
        </Div>
      </ScrollDiv>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: gray500,
    padding: 10,
    width: screenWidth * 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
});
