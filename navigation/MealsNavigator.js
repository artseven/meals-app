import React from 'react';
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer  } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from "@expo/vector-icons";
import {} from 'react-navigation-material-bottom-tabs';

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen
  },
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
}, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Platform === "android" ? Colors.primaryColor : "white"
		},
		headerTintColor: Platform === "android" ? "white" : Colors.primaryColor
	}
});

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: { screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}></Ionicons>;
    }
  }},
  Favorites: {screen: FavoritesScreen, navigationOptions: {
    tabBarLabel: 'Favorites!',
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}></Ionicons>;
    }
  }}
}, {
  tabBarOptions: {
    activeTintColor: Colors.secondaryColor
  } 
});

export default createAppContainer(MealsFavTabNavigator);
