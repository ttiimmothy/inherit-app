import React, {useState} from "react";
import {TouchableOpacity, View} from "react-native";
import {Div, Icon, Image, Text} from "react-native-magnus";
import Carousel from "react-native-snap-carousel";
import {OnlyNavigationProps} from "../../constants/models";
import {screenWidth} from "../../utils/screen";
import {carouselItems} from "./carouselItems";
import {CarouselItem, CarouselRenderItem} from "./interface";
import {styles} from "./style";

export function PublishedQuestCarousel(props: OnlyNavigationProps) {
  const [swiper, setSwiper] = useState<Carousel<CarouselItem> | null>();
  const [activeIndex, setActiveIndex] = useState(0);
  const goBackward = () => {
    swiper?.snapToPrev();
  };
  const goForward = () => {
    swiper?.snapToNext();
  };
  const {navigation} = props;

  function _renderItem(obj: CarouselRenderItem) {
    const {item} = obj;
    const photoPath = {photo1: require("../../../assets/photo1.png")};

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
                return <Icon name="staro" fontFamily="AntDesign" fontSize={20} color="gray600" key={index} mr={2} />;
              })}
            </Div>
            <Text color="white">{item.text}</Text>
          </Div>
          <Div flexDir="row" justifyContent="space-between" alignItems="center" w={screenWidth * 0.5}>
            <Text color="white">Price: $100</Text>
            <TouchableOpacity
              style={styles.detailButton}
              onPress={() => {
                navigation.navigate("Detail");
              }}>
              <Text color="white">Details</Text>
            </TouchableOpacity>
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
      renderItem={_renderItem}
      onSnapToItem={(index) => setActiveIndex(index)}></Carousel>
  );
}
