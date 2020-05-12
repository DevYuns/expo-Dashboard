import React from 'react';
import {Image, TextInput, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import logo from '../../assets/logo.png';


export default function Login() {
    const _handleOpenWithWebBrowser = () => {
        WebBrowser.openBrowserAsync('https://expo.io');
      };
    

  return (
    <View style={{display:'flex', flexDirection:'row'}}>


        <View style={styles.containerLeft}>
            <Text style={{fontSize:35, padding:15, color:'white', opacity:0.9}}>Follow</Text>
            <View>
                <View style={styles.followList}>
                    <Ionicons name="md-people" size={24} color="white" />
                    <Text style={styles.followText}>Meetup</Text>
                </View>

                <View style={styles.followList}>
                    <AntDesign name="github" size={24} color="white" />
                    <Text style={styles.followText}>Github</Text>
                </View>

                <View style={styles.followList}>
                    <AntDesign name="youtube" size={24} color="white" />
                    <Text style={styles.followText}>Youtube</Text>
                </View>

                <View style={styles.followList}>
                    <AntDesign name="medium-monogram" size={24} color="white" />
                    <Text style={styles.followText}>Medium</Text>
                </View>
            </View>
        </View>


        <View style={styles.containerRight}>

            <View style={styles.loginBox}>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.title}>
                    dooboolab
                </Text>

                <View style={styles.inputStyle}>
                    <AntDesign name="mail" size={15} color="black" style={{opacity:0.7, padding:1}} />
                    <TextInput 
                        style={styles.inputText}
                        placeholder={'Email'}
                        placeholderTextColor={'#000000'}
                    />
                </View>

                <View style={styles.inputStyle}>
                    <AntDesign name="lock1" size={15} color="black" style={{opacity:0.7, padding:1}} />
                    <TextInput 
                        style={styles.inputText}
                        placeholder={'Password'}
                        placeholderTextColor={'#000000'}
                    />
                </View>

                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={{fontSize:15, color: '#fff5fe'}}>
                        Get started
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={{fontSize:12, borderBottomWidth:1, marginBottom:30}}>
                        비밀번호를 잃어버리셨나요?
                    </Text>
                </TouchableOpacity>
            
                <View style = {styles.lineStyle} />

                <View style={styles.loginMenu}>
                    <TouchableOpacity>
                        <Text style={{fontSize:15}}>
                          Facebook
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{fontSize:15}}>
                          Google+
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
}

const {width: WIDTH} = Dimensions.get('window');
const {height: HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
    containerLeft: {
        width:WIDTH * (1/3),
        height:HEIGHT,
        backgroundColor: '#bc45b4',
        paddingLeft:20,
        paddingTop:20,
    },
    containerRight: {
        width:WIDTH * (2/3),
        height:HEIGHT,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginBox: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 15,
    },
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: '800',
        marginBottom: 30,
        opacity: 0.7,
    },
    inputStyle: {
        display: 'flex', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center',
        marginBottom: 20,
    },
    inputText: {
        flex: 1,
        width: WIDTH / 6,
        height: 25,
        borderBottomWidth: 1,
        marginLeft: 4,
        fontSize: 16,
        opacity: 0.4,
    },
    btnLogin: {
        backgroundColor: '#05fbcb',
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        marginBottom: 15,
    },
    lineStyle:{
        alignSelf: 'stretch',
        borderWidth: 0.5,
        borderColor:'black',
        opacity: 0.4,
   },
   loginMenu: {
       padding: 4,
       display:'flex', 
       flexDirection:'row', 
       alignSelf:'stretch', 
       justifyContent:'space-between',
       opacity: 0.7,
    },
    followList: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 15,
        padding: 10,
        marginBottom:5,
    },
    followText: {
        color: 'white',
        marginLeft: 10,
    }
});