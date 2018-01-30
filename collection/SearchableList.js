import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
  } from 'react-native';
  import rulebook from './rulebook.json';

  export default class SearchableList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          penalties: rulebook.penalties.penalty,
          displayablePenalties: null
        }
      }
    
      componentDidMount() {
    
      }

      onTextUpdate(text) {

      }
    
      render() {
        return (
          <View style={styles.container}>
            <TextInput
                style={{height: 40}}
                placeholder="Search"
                onChangeText={(text) => this.onTextUpdate({text})}
            />
            <FlatList
              data={this.state.penalties}
              renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
            />      
          </View>
        );
      }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    searchBox: {
        height:20,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
  });