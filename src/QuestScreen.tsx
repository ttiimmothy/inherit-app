import {CommonActions} from "@react-navigation/native";
import React, {useState} from "react";
import {SafeAreaView, View, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import {Div, Icon, Image, ScrollDiv, Text} from "react-native-magnus";
import Carousel from "react-native-snap-carousel";

interface CarouselItem {
  title: string;
  text: string;
  photo?: string;
}
interface CarouselRenderItem {
  item: CarouselItem;
}
interface Props {
  navigation: any;
}
const {width: screenWidth} = Dimensions.get("window");

export const QuestScreen = (props: Props) => {
  const [swiper, setSwiper] = useState<Carousel<CarouselItem> | null>();
  const [swiperTwo, setSwiperTwo] = useState<Carousel<CarouselItem> | null>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexTwo, setActiveIndexTwo] = useState(0);
  const carouselItems: CarouselItem[] = [
    {
      title: "Quest 1",
      text: "This is a quest",
      photo: "photo1.png",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ];
  const goBackward = () => {
    swiper?.snapToPrev();
  };
  const goForward = () => {
    swiper?.snapToNext();
  };
  const goBackwardTwo = () => {
    swiperTwo?.snapToPrev();
  };
  const goForwardTwo = () => {
    swiperTwo?.snapToNext();
  };
  const {navigation} = props;

  function _renderItem(obj: CarouselRenderItem) {
    const {item} = obj;
    const photoPath = {photo1: require("../assets/photo1.png")};

    return (
      <View style={styles.carousel}>
        {activeIndex > 0 && (
          <TouchableOpacity onPress={goBackward} style={[styles.button, styles.leftButton]}>
            <Icon fontFamily="FontAwesome5" name="chevron-left" fontSize={14} />
          </TouchableOpacity>
        )}
        <Div justifyContent="space-between">
          <Div>
            <Text fontSize={28} color="white">
              {item.title}
            </Text>
            <Text color="white">{item.text}</Text>
          </Div>
          <Div flexDir="row" justifyContent="space-between" alignItems="center" w={screenWidth * 0.4}>
            <Text color="white">Price: $100</Text>
            <TouchableOpacity
              style={styles.detailButton}
              onPress={() => {
                navigation.dispatch(
                  CommonActions.navigate({
                    name: "Setting",
                  })
                );
              }}>
              <Text color="white">Details</Text>
            </TouchableOpacity>
          </Div>
        </Div>
        {item.photo && <Image source={photoPath.photo1} resizeMode="contain" h="100%" w={150} />}
        {activeIndex < carouselItems.length - 1 && (
          <TouchableOpacity onPress={goForward} style={[styles.button, styles.rightButton]}>
            <Icon fontFamily="FontAwesome5" name="chevron-right" fontSize={14} />
          </TouchableOpacity>
        )}
      </View>
    );
  }

  function _renderItemTwo(obj: CarouselRenderItem) {
    const {item} = obj;
    const photoPath = {photo1: require("../assets/photo1.png")};

    return (
      <View style={styles.carousel}>
        {activeIndexTwo > 0 && (
          <TouchableOpacity onPress={goBackwardTwo} style={[styles.button, styles.leftButton]}>
            <Icon fontFamily="FontAwesome5" name="chevron-left" fontSize={14} />
          </TouchableOpacity>
        )}
        <Div justifyContent="space-between">
          <Div>
            <Text fontSize={28} color="white">
              {item.title}
            </Text>
            <Text color="white">{item.text}</Text>
          </Div>
          <Div flexDir="row" justifyContent="space-between" alignItems="center" w={screenWidth * 0.4}>
            <Text color="white">Price: $100</Text>
            <TouchableOpacity
              style={styles.detailButton}
              onPress={() => {
                navigation.dispatch(
                  CommonActions.navigate({
                    name: "Setting",
                  })
                );
              }}>
              <Text color="white">Details</Text>
            </TouchableOpacity>
          </Div>
        </Div>
        {item.photo && <Image source={photoPath.photo1} resizeMode="contain" h="100%" w={150} />}
        {activeIndexTwo < carouselItems.length - 1 && (
          <TouchableOpacity onPress={goForwardTwo} style={[styles.button, styles.rightButton]}>
            <Icon fontFamily="FontAwesome5" name="chevron-right" fontSize={14} />
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollDiv flex={1} bg="white" px="lg" py="sm">
        <Div flexDir="row" justifyContent="space-between">
          <Div borderWidth={1} borderColor="gray500" rounded="sm" p="md">
            <Text>Special Events</Text>
            <Text>50% exp up</Text>
            <Text>04 Jun - 10 Jun</Text>
          </Div>
          <Text>Balance: 100</Text>
        </Div>
        <Div pt="sm">
          <Text color="gray700" fontSize="text600" fontWeight="bold">
            Accepted Quests
          </Text>
          <Carousel
            layout="default"
            ref={e => setSwiper(e)}
            data={carouselItems}
            sliderWidth={screenWidth - 30}
            itemWidth={screenWidth - 40}
            itemHeight={screenWidth / 2}
            renderItem={_renderItem}
            onSnapToItem={index => setActiveIndex(index)}></Carousel>
        </Div>
        <Div pt="sm">
          <Text color="gray700" fontSize="text600" fontWeight="bold">
            Published Quests
          </Text>
          <Carousel
            layout="default"
            ref={e => setSwiperTwo(e)}
            data={carouselItems}
            sliderWidth={screenWidth - 30}
            itemWidth={screenWidth - 40}
            renderItem={_renderItemTwo}
            onSnapToItem={index => setActiveIndexTwo(index)}></Carousel>
        </Div>
      </ScrollDiv>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  carousel: {
    backgroundColor: "#263238",
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
});
