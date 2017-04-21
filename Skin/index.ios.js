/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	Text,
	Button,
	View,
	SectionList,
	H1,
	TouchableHighlight
} from 'react-native';

import DateSelector from './components/dateSelector.js';
import ProductList from './components/productList.js';

class SectionHeaderButton extends Component {
	render() {
		return (
			<TouchableHighlight onPress={() => this.props.onButtonPress()} style={styles.sectionHeaderButton}>
				<Text style={styles.sectionHeaderButtonText}>+</Text>
    		</TouchableHighlight>
		)
	}
}

export default class Skin extends Component {

	constructor() {
		super();
		this.state = {
			currentDate: new Date()
		}
	}

	render() {
		return (
				<View style={styles.container}>
					<DateSelector	currentDate={this.state.currentDate}
									onPrevious={this.handlePrevious.bind(this)}
									onNext={this.handleNext.bind(this)}/>

					<ProductList/>
				</View>
		);
	}

	handleButtonPress() {
		alert('cute');
	}

	handlePrevious() {
		var previousDate = new Date(this.state.currentDate.valueOf())
		previousDate.setDate(previousDate.getDate() - 1)

		this.setState({
					  currentDate: previousDate
		})
	}

	handleNext() {
		var previousDate = new Date(this.state.currentDate.valueOf())
		previousDate.setDate(previousDate.getDate() + 1)

		this.setState({
					  currentDate: previousDate
					  })
	}
}

const styles = StyleSheet.create({

								 container: {
									 flex: 1,
									 paddingTop: 15,
								 },

								 });

AppRegistry.registerComponent('Skin', () => Skin);
