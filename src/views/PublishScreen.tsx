import React, {useRef, useState} from "react";
import {SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {Div, Icon, ScrollDiv, Text} from "react-native-magnus";
import {standardStyles} from "../constants/styles";
import {screenWidth} from "../utils/screen";
import RNPickerSelect from "react-native-picker-select";
import Picker from "react-native-picker-select";
import {gray900, starsColor, teal700} from "../constants/colors";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import {TouchableOpacity} from "react-native-gesture-handler";

export function PublishScreen() {
  const [value, setValue] = useState();
  const ref = useRef<Picker | null>(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  function inputAccessoryView() {
    return (
      <View style={defaultStyles.modalViewMiddle}>
        <TouchableWithoutFeedback
          onPress={() => {
            ref.current?.togglePicker(true);
          }}
          hitSlop={{top: 4, right: 4, bottom: 4, left: 4}}>
          <View testID="needed_for_touchable">
            <Text style={defaultStyles.done}>Cancel</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            ref.current?.togglePicker(true);
          }}
          hitSlop={{top: 4, right: 4, bottom: 4, left: 4}}>
          <View testID="needed_for_touchable">
            <Text style={defaultStyles.done}>Done</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  const placeholder = {
    label: "Select time range",
    value: null,
    color: "#9ea0a4",
  };

  return (
    <SafeAreaView style={standardStyles.container}>
      <ScrollDiv flex={1} bg="white" px="lg" py="sm">
        <Div pt="md">
          <Div row alignItems="center" px="md" h={40}>
            <Text fontWeight="bold" w={screenWidth * 0.3}>
              Quest Title
            </Text>
            <Div bg="white" shadow={"xs"} rounded="md" w={screenWidth * 0.5} p="md">
              <TextInput />
            </Div>
          </Div>
          <Div row alignItems="center" px="md" pt="md" h={40}>
            <Text fontWeight="bold" w={screenWidth * 0.3}>
              Duration
            </Text>
            <RNPickerSelect
              placeholder={placeholder}
              onValueChange={(value) => setValue(value)}
              items={[
                {label: "1 hour", value: "1 hour"},
                {label: "1 day", value: "1 day"},
                {label: "1 week", value: "1 week"},
              ]}
              InputAccessoryView={inputAccessoryView}
              ref={ref}
              style={pickerSelectStyles}
            />
          </Div>
          <Div row alignItems="center" px="md" pt="md" h={40}>
            <Text fontWeight="bold" w={screenWidth * 0.3}>
              Expiration Date
            </Text>
            <Div
              bg="white"
              shadow={"xs"}
              rounded="md"
              w={screenWidth * 0.5}
              p="md"
              row
              justifyContent="space-between"
              alignItems="center">
              <Text>{moment(date).format("DD MMM YYYY")}</Text>
              <TouchableOpacity onPress={() => setOpen(true)}>
                <Icon fontFamily="Entypo" fontSize={16} name="calendar" />
              </TouchableOpacity>
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
                mode="date"
              />
            </Div>
          </Div>
          <Div row alignItems="center" px="md" pt="md" h={40}>
            <Text fontWeight="bold" w={screenWidth * 0.3}>
              Prize
            </Text>
            <Div bg="white" shadow={"xs"} rounded="md" w={screenWidth * 0.5} p="md">
              <TextInput keyboardType="numeric" />
            </Div>
          </Div>
          <Div row alignItems="center" px="md" pt="md" h={40}>
            <Text fontWeight="bold" w={screenWidth * 0.3}>
              Bail
            </Text>
            <Div bg="white" shadow={"xs"} rounded="md" w={screenWidth * 0.5} p="md">
              <TextInput keyboardType="numeric" />
            </Div>
          </Div>
          <Div row alignItems="center" px="md" pt="md" h={40}>
            <Text fontWeight="bold" w={screenWidth * 0.3}>
              Difficulty
            </Text>
            {[0, 1, 2, 3, 4].map((index) => {
              return <Icon name="staro" fontFamily="AntDesign" fontSize={20} color={starsColor} key={index} mr={2} />;
            })}
          </Div>
        </Div>
      </ScrollDiv>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chevronDown: {
    display: "none",
  },
  chevronUp: {
    display: "none",
  },
});

const defaultStyles = StyleSheet.create({
  modalViewMiddle: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#dedede",
    zIndex: 2,
  },
  done: {
    color: teal700,
    fontSize: 17,
    paddingTop: 1,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "white",
    color: gray900,
    paddingRight: 30, // to ensure the text is never behind the icon
    width: screenWidth * 0.5,
    shadowColor: gray900,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 0.3,
  },
  inputAndroid: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    color: gray900,
    paddingRight: 30, // to ensure the text is never behind the icon
    shadowColor: gray900,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 0.6,
  },
});
