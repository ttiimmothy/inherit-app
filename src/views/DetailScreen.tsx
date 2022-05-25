import {SafeAreaView, StyleSheet} from "react-native";
import React from "react";
import {Div, ScrollDiv, Text} from "react-native-magnus";

export function DetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollDiv flex={1} bg="white" px="lg" py="sm">
        <Text fontSize="text500" color="gray600" textAlign="center" fontWeight="bold">
          Send Quest
        </Text>
        <Div row justifyContent="center" pt="sm">
          <Div rounded="md" p="md" borderWidth={1} borderColor="gray500">
            <Text>Your application has been sent. You will know the application is accepted or not soon.</Text>
          </Div>
        </Div>
        <Div row>
          <Text>Difficulty</Text>
        </Div>
      </ScrollDiv>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
