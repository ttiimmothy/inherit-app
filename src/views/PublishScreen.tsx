import React, {useRef, useState} from "react";
import {SafeAreaView, TextInput} from "react-native";
import {Button, Div, ScrollDiv, Select, SelectRef, Text} from "react-native-magnus";
import {standardStyles} from "../constants/styles";
import {screenWidth} from "../utils/screen";

export function PublishScreen() {
  const selectRef = useRef<SelectRef | null>(null);
  const [selectValue, setSelectedValue] = useState(null);

  return (
    <SafeAreaView style={standardStyles.container}>
      <ScrollDiv flex={1} bg="white" px="lg" py="sm">
        <Div pt="md">
          <Div row alignItems="center" px="md">
            <Text fontWeight="bold" w={screenWidth * 0.3}>
              Quest Title
            </Text>
            <Div bg="white" shadow={"xs"} rounded="md" w={screenWidth * 0.5} p="md">
              <TextInput />
            </Div>
          </Div>
          <Div row alignItems="center" px="md" pt="md">
            <Text fontWeight="bold" w={screenWidth * 0.3}>
              Duration
            </Text>
            <Div>
              <Button
                bg="white"
                shadow={5}
                shadowColor="gray900"
                rounded="md"
                w={screenWidth * 0.5}
                p="md"
                onPress={() => {
                  selectRef.current?.open();
                }}
                color="gray900">
                {selectValue ? (selectValue as string).toString() : ""}
              </Button>
              <Select
                onSelect={setSelectedValue}
                ref={selectRef}
                value={selectValue}
                mt="md"
                pb="sm"
                roundedTop="xl"
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={(item, index) => (
                  <Select.Option value={item} py="md" px="xl">
                    <Text>Option {index}</Text>
                  </Select.Option>
                )}
              />
            </Div>
          </Div>
        </Div>
      </ScrollDiv>
    </SafeAreaView>
  );
}
