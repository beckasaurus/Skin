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
									onPrevious={this.handlePrevious}
									onNext={this.handleNext}/>
					
					<SectionList renderItem={this.renderItem}
  					renderSectionHeader={this.renderSectionHeader}
  					sections={[
    					{data: [
								{title: 'Heimish All Clean Balm', key: '0'},
							], key: 'Cleansers'},
    					{data: [
								{title: 'Paula\'s Choice AHA Gel', key: '0'},
							], key: 'Actives'},
    					{data: [
								{title: 'CosRx Centella Water Alcohol-Free Toner', key: '0'},
							], key: 'Toners'},
							{data: [
								{title: 'CosRx Oil-Free Lotion', key: '0'},
							], key: 'Humectants'},
							{data: [
								{title: 'Foxbrim Rosehip Seed Oil', key: '0'},
							], key: 'Occlusives'},
						]}
					/>
				</View>
		);
	}
	
	renderSectionHeader({section}) {
		return (
			<View style={styles.sectionHeader}>
				<Text style={styles.sectionHeaderText}>{section.key}</Text>
				<SectionHeaderButton onButtonPress={this.handleButtonPress}/>
			</View>
			)
	}
	
	renderItem({item, index}) {
		return <Text>{item.title}</Text>
	}	
	
	handleButtonPress() {
		alert('press');
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
								 
								 sectionHeader: {
								 	backgroundColor: 'rosybrown',
								 	height: 35,
								 	flexDirection: 'row',
								 	alignItems: 'center',
								 	justifyContent: 'space-between',
								 	marginTop: 10,
								 	marginBottom: 10
								 },
								 
								 sectionHeaderText: {
								 	color: 'linen',
								 	marginLeft: 10
								 },
								 
								 sectionHeaderButton: {
								 	height: 30,
								 	width: 30,	
								 	marginRight: 10,
								 	justifyContent: 'center',		 	
								 },
						
								 sectionHeaderButtonText: {
								 	color: 'linen',
								 	alignSelf: 'center',
								 	fontSize: 20,
								 	justifyContent: 'center',
								 	alignItems: 'center'
								 }

								 });

AppRegistry.registerComponent('Skin', () => Skin);
