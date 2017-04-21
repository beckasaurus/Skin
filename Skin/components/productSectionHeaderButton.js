import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableHighlight
} from 'react-native';

export default class ProductSectionHeaderButton extends Component {
	render() {
		return (
			<TouchableHighlight onPress={() => this.props.onButtonPress()} style={productListSectionHeaderButtonStyles.sectionHeaderButton}>
				<Text style={productListSectionHeaderButtonStyles.sectionHeaderButtonText}>+</Text>
    		</TouchableHighlight>
		)
	}
}

const productListSectionHeaderButtonStyles = StyleSheet.create({

								 sectionHeaderButton: {
								 	height: 30,
								 	width: 30,
								 	marginRight: 10,
								 	justifyContent: 'center',
								 },

								 sectionHeaderButtonText: {
								 	alignSelf: 'center',
								 	fontSize: 20,
								 	justifyContent: 'center',
								 	alignItems: 'center'
								},

								 });