import moment from "moment";
import React from "react";
import {TouchableOpacity} from "react-native";
import {Div, Icon, Image, Text} from "react-native-magnus";
import {
  blue500,
  carouselBackgroundColor,
  gray900,
  palePrizeColor,
  paleStarsColor,
  prizeColor,
  starsColor,
} from "../../constants/colors";
import {paleTitleColor, titleColor, titleFontSize} from "../../constants/title";
import {screenWidth} from "../../utils/screen";
import {Props} from "./interface";
import {styles} from "./style";

export function Quest(props: Props) {
  const {navigation, colors, number} = props;
  let bg;
  let color;
  let detailButtonColor;
  if (colors === "white") {
    bg = "white";
    color = gray900;
    detailButtonColor = blue500;
  } else {
    color = "white";
    detailButtonColor = "white";
    if (colors === "blue") {
      bg = blue500;
    } else {
      bg = carouselBackgroundColor;
    }
  }
  const colorsCondition = colors !== "white" && colors !== "green";

  return (
    <Div bg={bg} shadow={"sm"} p="md" mx="sm" mb="md" rounded={"md"} mt={number === 0 ? "lg" : "md"}>
      <Div row justifyContent="space-between" alignItems="center">
        <Text color={colorsCondition ? paleTitleColor : titleColor} fontSize={titleFontSize} fontWeight="bold">
          Quest {number + 1}
        </Text>
        <Div row alignItems="center">
          {[0, 1, 2, 3, 4].map((index) => {
            return (
              <Icon
                name="staro"
                fontFamily="AntDesign"
                fontSize={12}
                color={colorsCondition ? paleStarsColor : starsColor}
                key={index}
                mr={2}
              />
            );
          })}
          <Text pl={5} color={color}>
            {moment().startOf("week").fromNow()}
          </Text>
        </Div>
      </Div>
      <Div row justifyContent="space-between">
        <Text py="lg" w={screenWidth * 0.5} color={color}>
          Card layouts can vary to support the types of content they contain. The following elements are commonly found among that
          variety.
        </Text>
        <Image source={require("../../../assets/photo1.png")} resizeMode="contain" h="100%" w={screenWidth * 0.3} />
      </Div>
      <Div row alignItems="center" justifyContent="space-between">
        <TouchableOpacity
          style={[styles.detailButton, {borderColor: detailButtonColor}]}
          onPress={() => {
            navigation.navigate("Detail");
          }}>
          <Text color={detailButtonColor}>Detail</Text>
        </TouchableOpacity>
        <Text color={colorsCondition ? palePrizeColor : prizeColor}>Prize: $100</Text>
      </Div>
    </Div>
  );
}
