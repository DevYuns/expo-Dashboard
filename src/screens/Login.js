import React from 'react';
import {Image, TextInput, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import logo from '../../assets/logo.png';


export default class Home extends React.Component {

    state = {
        userId: '',
        password: '',
        isFocusd: false,
    }

    handleFocus = event => {
        this.setState({isFocusd: true});
        if(this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    handleBlur = event => {
        this.setState({isFocusd: false});
        if(this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    checkLogin() {
        const {userId, password} = this.state;
        if(userId != '' && password != '') {
            this.props.navigation.navigate('test')
        } else return alert('fail');
    }

    render() {
        const{isFocusd} = this.state;
        const {onFocus, onBlur, ...props} = this.props;

        return (
            <View style={{display:'flex', flexDirection:'row'}}>
                
        
        
                <View style={styles.containerLeft}>
                    <Text style={{fontSize:35, padding:15, color:'white'}}>Follow</Text>
                    <View>
                        <TouchableOpacity style={styles.followList} onPress={_=>this.linkToMeetUp()}>
                            <Ionicons name="md-people" size={24} color="white" />
                            <Text style={styles.followText}>Community</Text>
                        </TouchableOpacity>
        
                        <TouchableOpacity style={styles.followList} onPress={_=>this.linkToGitHub()}>
                            <AntDesign name="github" size={24} color="white" />
                            <Text style={styles.followText}>Github</Text>
                        </TouchableOpacity>
        
                        <TouchableOpacity style={styles.followList} onPress={_=>this.linkToYoutube()}>
                            <AntDesign name="youtube" size={24} color="white" />
                            <Text style={styles.followText}>Youtube</Text>
                        </TouchableOpacity>
        
                        <TouchableOpacity style={styles.followList} onPress={_=>this.linkToMedium()}>
                            <AntDesign name="medium-monogram" size={24} color="white" />
                            <Text style={styles.followText}>Medium</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        
        
                <View style={styles.containerRight}>
        
                    <View style={styles.loginBox}>
                        <Image source={logo} style={styles.logo}/>
                        <Text style={styles.title}>
                            dooboolab
                        </Text>
        
                        <View 
                        onFocus={this.onFocusChange}    
                        style={(this.state.isFocusd) ? (styles.inputFocused) : (styles.inputStyle)}>
                            <AntDesign name="mail" size={15} color="black" style={{opacity:0.7, padding:1}} />
                            <TextInput 
                                style={styles.inputText}
                                name='userId'
                                placeholder='Email'
                                selectionColor='red'
                                underlineColor='red'
                                onChangeText={text => this.setState({userId: text})}

                            />
                        </View>
        
                        <View style={styles.inputStyle}>
                            <AntDesign name="lock1" size={15} color="black" style={{opacity:0.7, padding:1}} />
                            <TextInput 
                                style={styles.inputText}
                                name='password'
                                placeholder='Password'
                                secureTextEntry={true}
                                onChangeText={text => this.setState({password: text})}
                            />
                        </View>
        
                        <TouchableOpacity style={styles.btnLogin} onPress={_ => this.checkLogin()}>
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

    linkToMeetUp = async () => {
        let result = await WebBrowser.openBrowserAsync('https://reactnativeseoul.org/');
        this.setState({ result });
      };
    linkToGitHub = async () => {
        let result = await WebBrowser.openBrowserAsync('https://github.com/dooboolab');
        this.setState({ result });
      };
    linkToYoutube = async () => {
        let result = await WebBrowser.openBrowserAsync('https://www.youtube.com/channel/UCy0YwPrjRbcmb4A110xx4zg');
        this.setState({ result });
      };
    linkToMedium = async () => {
        let result = await WebBrowser.openBrowserAsync('https://medium.com/@dooboolab');
        this.setState({ result });
      };
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
    inputFocused: {
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
        opacity: 0.7,
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