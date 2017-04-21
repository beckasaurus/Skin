import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SectionList,
} from 'react-native';

import ProductSectionHeaderButton from 'productSectionHeaderButton.js'

export default class ProductList extends Component {
	render() {
		return (
				<SectionList
						SectionSeparatorComponent={this.renderSectionSeparator}
						ItemSeparatorComponent={this.renderItemSeparator}
						renderItem={this.renderItem}
  					renderSectionHeader={this.renderSectionHeader.bind(this)}
  					sections={[
    					{data: [
								{title: 'Heimish All Clean Balm', key: '0'},
								{title: 'CosRx Good Morning Low pH Cleanser', key: '1'}
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
				);
	}
	
	renderSectionSeparator() {
		return (
			<View style={productListStyles.sectionSeparator}></View>
		)
	}
	
	renderItemSeparator() {
		return (
			<View style={productListStyles.itemSeparator}></View>
		)
	}

	renderSectionHeader({section}) {
		return (
			<View style={productListStyles.sectionHeader}>
				<Text style={productListStyles.sectionHeaderText}>{section.key}</Text>
				<SectionHeaderButton onButtonPress={this.handleButtonPress}/>
			</View>
			)
	}

	renderItem({item, index}) {
		return (
			<View style={productListStyles.sectionItem}>
				<Text style={productListStyles.sectionItemText}>{item.title}</Text>
			</View>
		)
	}
	
};

const productListStyles = StyleSheet.create({

								 sectionSeparator: {
									 backgroundColor: '#a0a0a0',
									 height: 3
								 },
								 
								 itemSeparator: {
								 	backgroundColor: '#e5e5e5',
								 	height: 1,
								 },

								 sectionHeader: {
								 	backgroundColor: '#cfe2c7',
								 	height: 35,
								 	flexDirection: 'row',
								 	alignItems: 'center',
								 	justifyContent: 'space-between',
								 },

								 sectionHeaderText: {
								 		marginLeft: 10
								 },

								sectionItem: {
									height: 30,
									paddingLeft: 10,
									justifyContent: 'center'
								}

								 });
