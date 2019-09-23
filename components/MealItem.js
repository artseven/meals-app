import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
						<ImageBackground source={{uri: props.image}} style={styles.bgImage}>
            <Text style={styles.title}>{props.title}</Text>
						</ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
						<Text>{props.duration}m</Text>
						<Text>{props.complexity.toUpperCase()}</Text>
						<Text>{props.affordability.toUpperCase()}</Text>
					</View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: '100%',
		backgroundColor: '#ccc',
	},
	bgImage: {
		width: '100%',
		height: '100%'
	},
  mealRow: {
    flexDirection: "row"
	},
	mealHeader: {
		height: '90%'
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between'
	},
	title: {
		fontSize: 22,
		color: 'white',
		backgroundColor: 'rgba(0,0,0,0.7)',
		textAlign: "center"
	}
});

export default MealItem;
