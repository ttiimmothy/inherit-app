import {StyleSheet} from "react-native";
import {carouselBackgroundColor} from "../../constants/colors";
import {screenWidth} from "../../utils/screen";

export const styles = StyleSheet.create({
  carousel: {
    backgroundColor: carouselBackgroundColor,
    borderRadius: 5,
    width: "100%",
    height: screenWidth * 0.4,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "gray",
    opacity: 0.7,
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: "center",
    position: "absolute",
    top: "45%",
    zIndex: 1,
  },
  leftButton: {
    left: 0,
  },
  rightButton: {
    right: 0,
  },
  detailButton: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
  },
  questButton: {
    width: screenWidth * 0.2,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 5,
  },
  takeQuestNumber: {
    flexDirection: "row",
  },
});
