/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {DefaultScreen} from "./src/views/DefaultScreen";
import {SettingScreen} from "./src/views//SettingScreen";
import {Icon} from "react-native-magnus";
import {QuestPackage} from "./src/routes/QuestPackage";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let ionIcon;
          let materialCommunityIcon;
          let materialIcon;
          let octIcon;
          if (route.name === "QuestRoute") {
            octIcon = "checklist";
          } else if (route.name === "Contact") {
            materialCommunityIcon = focused ? "contacts" : "contacts-outline";
          } else if (route.name === "Setting") {
            materialCommunityIcon = focused ? "hexagon-slice-6" : "hexagon-outline";
          }
          // You can return any component that you like here
          return ionIcon ? (
            <Icon fontFamily="Ionicons" name={ionIcon} fontSize={28} color={color} />
          ) : materialCommunityIcon ? (
            <Icon fontFamily="MaterialCommunityIcons" name={materialCommunityIcon} fontSize={28} color={color} />
          ) : materialIcon ? (
            <Icon fontFamily="MaterialIcons" name={materialIcon} fontSize={28} color={color} />
          ) : (
            octIcon && <Icon fontFamily="Octicons" name={octIcon} fontSize={28} color={color} />
          );
        },
      })}>
      <Tab.Screen name="QuestRoute" component={QuestPackage} options={{headerShown: false, title: "Quest"}} />
      <Tab.Screen name="Contact" component={DefaultScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default App;
