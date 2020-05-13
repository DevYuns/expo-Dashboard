import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import DrawerNavigation from '../components/navigation/DrawerNavigation';

export default class Dashboard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
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
                </View>
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
      logout: {
        alignSelf:"flex-end",
        display:"flex", 
        flexDirection:"row", 
        alignItems:"center", 
        marginHorizontal:16,
        marginTop: 15, 
        padding: 10,
        borderRadius: 8,
        backgroundColor:'#bc45b4'
    }
  })