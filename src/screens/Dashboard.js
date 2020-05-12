import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export default class Dashboard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity
                        style={{alignItems:"flex-start", margin:16}}
                        onPress={this.props.navigation.openDrawer}
                    >
                        <SimpleLineIcons name="menu" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={{flex:1, alignItems: "center", justifyContent:'center'}}>
                        <Text style={styles.text}>
                        {this.props.name} Screen
                        </Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
  };

  const styles = StyleSheet.create({
      container: {
          flex:1,
          backgroundColor: '#FFF'
      },
      text: {
          color: 'black',
      },
  })