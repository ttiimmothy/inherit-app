import React, {useState} from "react";
import {TouchableOpacity, View} from "react-native";
import {Div, Icon, Image, Text} from "react-native-magnus";
import Carousel from "react-native-snap-carousel";
import {starsColor} from "../../constants/colors";
import {OnlyNavigationProps} from "../../constants/models";
import {screenWidth} from "../../utils/screen";
import {carouselItems} from "./carouselItems";
import {CarouselItem, CarouselRenderItem} from "./interface";
import {styles} from "./style";

export function AcceptedQuestCarousel(props: OnlyNavigationProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<Carousel<CarouselItem> | null>();
  const {navigation} = props;
  const [showTakeQuestNumber, setShowTakeQuestNumber] = useState(false);

  function _renderItem(obj: CarouselRenderItem) {
    const {item} = obj;
    const photoPath = {photo1: require("../../../assets/photo1.png")};
    const goBackward = () => {
      swiper?.snapToPrev();
    };
    const goForward = () => {
      swiper?.snapToNext();
    };

    return (
      <View style={styles.carousel}>
        {activeIndex > 0 && (
          <TouchableOpacity onPress={goBackward} style={[styles.button, styles.leftButton]}>
            <Icon fontFamily="FontAwesome5" name="chevron-left" fontSize={14} />
          </TouchableOpacity>
        )}
        <Div justifyContent="space-between">
          <Div>
            <Div row>
              <Text fontSize={28} color="white" pr={5}>
                {item.title}
              </Text>
              {[0, 1, 2, 3, 4].map((index) => {
                return <Icon name="staro" fontFamily="AntDesign" fontSize={20} color={starsColor} key={index} mr={2} />;
              })}
            </Div>
            <Text color="white">{item.text}</Text>
          </Div>
          <Div flexDir="row" justifyContent="space-between" alignItems="center" w={screenWidth * 0.5}>
            <Text color="white">Price: $100</Text>
            <Div flexDir="row" alignItems="center">
              <TouchableOpacity
                onPress={() => {
                  setShowTakeQuestNumber(!showTakeQuestNumber);
                }}
                style={styles.takeQuestNumber}>
                {showTakeQuestNumber && (
                  <Div bg="indigo900" position="absolute" flex={1} bottom={30} right={-30} rounded="md" p={5}>
                    <Text numberOfLines={2} fontSize="text50" color="white">
                      You are one of 11 people {"\n"}who want to take this quest
                    </Text>
                  </Div>
                )}
                <Div position="relative" flexDir="row" mr={45} py={12}>
                  <Image
                    source={require("../../../assets/anonymous-icon.png")}
                    resizeMode="contain"
                    h={24}
                    w={24}
                    zIndex={3}
                    position="absolute"
                    left={0}
                    borderWidth={2}
                    borderColor="gray"
                    borderRadius={24}
                  />
                  <Image
                    source={require("../../../assets/anonymous-icon.png")}
                    resizeMode="contain"
                    h={24}
                    w={24}
                    zIndex={2}
                    position="absolute"
                    left={8}
                    borderWidth={2}
                    borderColor="gray"
                    borderRadius={24}
                  />
                  <Image
                    source={require("../../../assets/anonymous-icon.png")}
                    resizeMode="contain"
                    h={24}
                    w={24}
                    zIndex={1}
                    position="absolute"
                    left={16}
                    borderWidth={2}
                    borderColor="gray"
                    borderRadius={24}
                  />
                </Div>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.detailButton}
                onPress={() => {
                  navigation.navigate("Detail");
                }}>
                <Text color="white">Details</Text>
              </TouchableOpacity>
            </Div>
          </Div>
        </Div>
        {item.photo && <Image source={photoPath.photo1} resizeMode="contain" h="100%" w={screenWidth * 0.3} />}
        {activeIndex < carouselItems.length - 1 && (
          <TouchableOpacity onPress={goForward} style={[styles.button, styles.rightButton]}>
            <Icon fontFamily="FontAwesome5" name="chevron-right" fontSize={14} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
  return (
    <Carousel
      layout="default"
      ref={(e) => setSwiper(e)}
      data={carouselItems}
      sliderWidth={screenWidth - 30}
      itemWidth={screenWidth - 40}
      itemHeight={screenWidth / 2}
      renderItem={_renderItem}
      onSnapToItem={(index) => setActiveIndex(index)}></Carousel>
  );
}
