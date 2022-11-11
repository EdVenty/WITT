import * as React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    cardTitle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 25
    },
    cardSubtitle: {
        color: '#ffffff'
    },
    cardTexts: {
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    card: {
        backgroundColor: '#2E1969',
        padding: 5,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        minWidth: Dimensions.get('window').width * 0.765,
        // marginRight: 10
    },
    cardIcon: {
        color: '#ffffff',
        backgroundColor: '#5e4e8b',
        padding: 20,
        borderRadius: 10,
        margin: 10
    },
    scroll: {
        backgroundColor: '#2E1969',
        borderRadius: 100,
        borderColor: '#5e4e8b',
        borderWidth: 5,
        zIndex: 1,
    },
    scrollContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: -25,
        justifyContent: 'center'
    },
    carousel: {
        flexDirection: 'row'
    },
    tabText: {
        fontSize: 18,
        color: "black",
        fontWeight: 'bold',
        marginBottom: 10
    },
    tab: {
        marginVertical: 20,
        paddingHorizontal: 30
    },
    addButton: {
        borderRadius: 20,
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#2E1969',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    addButtonText: {
        color: 'white'
    },
    carouselElement: {
        flexDirection: 'row'
    },
    cardSubContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        marginBottom: 10
    },
    search: {
        flexDirection: 'row',
        borderColor: '#2E1969',
        borderWidth: 3,
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    searchText: {
        color: '#7e788f'
    },
    searchTextContainer: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        marginLeft: 7
    },
    item: {
        backgroundColor: '#2E1969',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemIcon: {
        color: '#ffffff',
        backgroundColor: '#5e4e8b',
        padding: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    itemText: {
        color: 'white',
        marginLeft: 10
    },
    vertical: {
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    flexRow: {
        flexDirection: 'row'
    },
    itemControl: {
        marginRight: 10
    },
    itemsList: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 20,
        
    },
    itemsListSpacer: {
        height: 10
    },
    iconSelector: {
        backgroundColor: '#f5f5f5',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-evenly',
        borderRadius: 20
    },
    iconSelectorIcon: {
        padding: 15,
    },
    iconSelectorIconSelected: {
        padding: 15,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#2E1969',
    },
    header: {
        fontSize: 36,
        marginHorizontal: 30,
        marginVertical: 10
    },
    fieldInputText: {
        backgroundColor: '#f5f5f5',
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    createButton: {
        backgroundColor: '#2E1969',
        marginHorizontal: 30,
        borderRadius: 20,
        padding: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },
    createButtonText: {
        color: 'white'
    },
    createTextContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },
    createText: {
        fontSize: 18
    }
});