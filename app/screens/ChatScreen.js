import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';

function ChatScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={{ marginTop: RFPercentage(4), width: '90%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <View style={{ position: 'absolute', left: 0, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.8), fontWeight: 'bold' }} >
                        Mike
                    </Text>
                    <View style={{ marginTop: RFPercentage(1.2), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={require('../../assets/images/m1.png')} />
                        <Image style={{ width: RFPercentage(5), height: RFPercentage(5), marginLeft: RFPercentage(2) }} source={require('../../assets/images/m2.png')} />
                        <Image style={{ width: RFPercentage(5), height: RFPercentage(5), marginLeft: RFPercentage(2) }} source={require('../../assets/images/m3.png')} />
                    </View>
                </View>
                <Image source={require('../../assets/images/current.png')} style={{ width: RFPercentage(6), height: RFPercentage(6) }} />
                <View style={{ position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.8), fontWeight: 'bold' }} >
                        Mike
                    </Text>
                    <View style={{ marginTop: RFPercentage(1.2), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={require('../../assets/images/1.png')} />
                        <Image style={{ width: RFPercentage(5), height: RFPercentage(5), marginLeft: RFPercentage(2) }} source={require('../../assets/images/2.png')} />
                        <Image style={{ width: RFPercentage(5), height: RFPercentage(5), marginLeft: RFPercentage(2) }} source={require('../../assets/images/3.png')} />
                    </View>
                </View>
            </View>


        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.primary,
    }
})

export default ChatScreen;