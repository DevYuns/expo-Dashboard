import React from 'react';
import {Image, TextInput, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const test = () => {
    return (
        <div>
            <View>
                <TouchableOpacity onPress={_=>this.Navigation.navigator('Home')}>
                    <Text>
                        test
                    </Text>
                </TouchableOpacity>
                
            </View>
        </div>
    );
};

export default test;