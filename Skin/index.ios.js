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
					<Button color='rosybrown' title='Previous' onPress={() => this.props.onPrevious()}/>
					<Text style={dateSelectorStyles.currentDate}>{this.props.currentDate.toDateString()}</Text>
					<Button color='rosybrown' title='Next' onPress={() => this.props.onNext()}/>
				</View>
				);
	}
}

const dateSelectorStyles = StyleSheet.create({

											 dateSelector: {
												height: 40,
												flexDirection: 'row',
												justifyContent: 'space-between',
												alignSelf: 'stretch',
											 },

											 currentDate: {
												alignSelf: 'center'
											},
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
									onPrevious={this.handlePrevious.bind(this)}
									onNext={this.handleNext.bind(this)}/>

					<SectionList
						SectionSeparatorComponent={this.renderSectionSeparator}
						renderItem={this.renderItem}
  					renderSectionHeader={this.renderSectionHeader.bind(this)}
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

	renderSectionSeparator() {
		return (
			<View style={styles.sectionSeparator}></View>
		)
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
		return <Text style={styles.sectionItem}>{item.title}</Text>
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
									 backgroundColor: 'linen',
								 },

								 sectionSeparator: {
									 backgroundColor: '#a0a0a0',
									 height: 5
								 },

								 sectionHeader: {
								 	backgroundColor: 'rosybrown',
								 	height: 35,
								 	flexDirection: 'row',
								 	alignItems: 'center',
								 	justifyContent: 'space-between',
								 },

								 sectionHeaderText: {
										color: 'mistyrose',
								 		marginLeft: 10
								 },

								 sectionHeaderButton: {
								 	height: 30,
								 	width: 30,
								 	marginRight: 10,
								 	justifyContent: 'center',
								 },

								 sectionHeaderButtonText: {
										color: 'mistyrose',
								 	alignSelf: 'center',
								 	fontSize: 20,
								 	justifyContent: 'center',
								 	alignItems: 'center'
								},

								sectionItem: {
									height: 20,
									backgroundColor: 'mistyrose',
									color: '#474747',
									borderBottomColor: 'rosybrown',
									borderBottomWidth: 1,
								}

								 });

AppRegistry.registerComponent('Skin', () => Skin);
