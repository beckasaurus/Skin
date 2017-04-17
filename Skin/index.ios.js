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
	View
} from 'react-native';

class DateSelector extends Component {
	
	constructor() {
		super();
	}
	
	render() {
		return (
				<View style={dateSelectorStyles.dateSelector}>
					<Button title='Previous' onPress={() => this.props.onPrevious()}/>
					<Text style={dateSelectorStyles.currentDate}>{this.props.currentDate.toDateString()}</Text>
					<Button title='Next' onPress={() => this.props.onNext()}/>
				</View>
				);
	}
}

const dateSelectorStyles = StyleSheet.create({
											 
											 dateSelector: {
												height: 40,
												flexDirection: 'row',
												justifyContent: 'space-between',
												backgroundColor: 'linen',
												alignSelf: 'stretch',
											 },
											 
											 currentDate: {
												alignSelf: 'center'
											 }
})

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
									onPrevious={() => this.handlePrevious()}
									onNext={() => this.handleNext()}/>
				</View>
		);
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
									 backgroundColor: 'linen',
								 },
								 
								 });

AppRegistry.registerComponent('Skin', () => Skin);

