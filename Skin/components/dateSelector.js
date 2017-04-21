import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	Button,
	View,
} from 'react-native';

export default class DateSelector extends Component {
	render() {
		return (
				<View style={dateSelectorStyles.dateSelector}>
					<Button color='#545454' title='Previous' onPress={() => this.props.onPrevious()}/>
					<Text style={dateSelectorStyles.currentDate}>{this.props.currentDate.toDateString()}</Text>
					<Button color='#545454' title='Next' onPress={() => this.props.onNext()}/>
				</View>
				);
	}
};

const dateSelectorStyles = StyleSheet.create({

	dateSelector: {
		height: 40,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'stretch',
	},

	currentDate: {
		alignSelf: 'center',
	},
});

