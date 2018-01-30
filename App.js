import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import SearchableList from './collection/SearchableList'

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <SearchableList />
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
});
