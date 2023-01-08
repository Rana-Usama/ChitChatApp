import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Rating, AirbnbRating } from 'react-native-elements';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function SettingsScreen(props) {

    const [check, SetCheck] = useState(false);

    return (
        <Screen style={styles.screen}>
            <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.8), fontWeight: 'bold' }} >
                        Switch to English
                    </Text>
                    <TouchableOpacity onPress={() => SetCheck(true)} style={{ position: 'absolute', right: 0, width: RFPercentage(3), height: RFPercentage(3), borderColor: Colors.black, borderWidth: RFPercentage(0.4), borderRadius: RFPercentage(0.5), justifyContent: 'center', alignItems: 'center' }} activeOpacity={0.8}>
                        {check ?
                            <Entypo name="check" onPress={() => SetCheck(false)} style={{ fontSize: RFPercentage(2) }} color="black" />
                            :
                            null
                        }
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: RFPercentage(1), width: '80%', alignSelf: 'flex-start' }} >
                    <Text style={{ fontSize: RFPercentage(1.6), color: Colors.white }} >
                        Automatically switch to English if there are no TXTRs online who speak your language.
                    </Text>
                </View>
            </View>

            <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.8), fontWeight: 'bold' }} >
                        Rate our App!
                    </Text>
                    <View style={{ position: 'absolute', right: 0 }} >
                        <AirbnbRating
                            count={5}
                            defaultRating={4}
                            size={25}
                        />
                    </View>
                </View>
                <View style={{ marginTop: RFPercentage(1), width: '80%', alignSelf: 'flex-start' }} >
                    <Text style={{ fontSize: RFPercentage(1.6), color: Colors.white }} >
                        We'd love to hear from you!
                    </Text>
                </View>
            </View>

            <TouchableOpacity activeOpacity={0.8} style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(4), width: '90%' }} >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.7), fontWeight: 'bold' }} >
                    Restore Purchases
                </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(4), width: '90%' }} >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.7), fontWeight: 'bold' }} >
                    Terms and Conditions
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.8} style={{ position: 'absolute', bottom: RFPercentage(3) }} >
                <Image source={require('../../assets/images/cross.png')} style={{ width: RFPercentage(6), height: RFPercentage(6) }} />
            </TouchableOpacity>
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

export default SettingsScreen;