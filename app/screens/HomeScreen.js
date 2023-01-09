import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { CountryPicker } from "react-native-country-codes-picker";
import { Entypo } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';
import SettingsScreen from './SettingsScreen';

function HomeScreen(props) {

    const [show, setShow] = useState(false);
    const [countryFlag, setCountryFlag] = useState(false);

    const [select, SetSelect] = useState(false);

    const avatarsData = [
        {
            avatarSource: require('../../assets/images/1st.png'),
        },
        {
            avatarSource: require('../../assets/images/2nd.png'),
        },
        {
            avatarSource: require('../../assets/images/3rd.png'),
        },
        {
            avatarSource: require('../../assets/images/2nd.png'),
        },
        {
            avatarSource: require('../../assets/images/1st.png'),
        },
        {
            avatarSource: require('../../assets/images/3rd.png'),
        },
        {
            avatarSource: require('../../assets/images/1st.png'),
        },
        {
            avatarSource: require('../../assets/images/2nd.png'),
        },
        {
            avatarSource: require('../../assets/images/3rd.png'),
        },
        {
            avatarSource: require('../../assets/images/2nd.png'),
        },
        {
            avatarSource: require('../../assets/images/1st.png'),
        },
    ]

    // Input fields
    const [inputField, SetInputField] = useState([
        {
            placeholder: "Email & Phone Number",
            value: "",
        }

    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const [inputField2, SetInputField2] = useState([
        {
            placeholder: "Email & Phone Number",
            value: "",
        }

    ]);

    const handleChange2 = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    return (
        <Screen style={styles.screen}>
            <View style={{ width: '90%', marginTop: RFPercentage(4), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                {/* Country Picker */}
                {countryFlag ?
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setShow(true)} style={{ justifyContent: 'center', alignItems: 'flex-start', width: '30%', position: 'absolute', left: 0 }} >
                        <Text style={{
                            color: 'white',
                            fontSize: RFPercentage(5)
                        }}>
                            {countryFlag}
                        </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setShow(true)} style={{ justifyContent: 'center', alignItems: 'flex-start', width: '30%', position: 'absolute', left: 0 }} >
                        <Text style={{ color: 'white', fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                            Select Country
                        </Text>
                    </TouchableOpacity>
                }

                {/* setting */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("SettingsScreen")} style={{ position: 'absolute', right: 0 }} >
                    <Image source={require('../../assets/images/setting.png')} style={{ width: RFPercentage(4), height: RFPercentage(4) }} />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1, width: '100%', marginTop: RFPercentage(1) }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Icons */}
                    <View style={{ marginTop: RFPercentage(5), width: '90%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                        <TouchableOpacity activeOpacity={0.8} >
                            <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={require('../../assets/images/1.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} >
                            <Image style={{ width: RFPercentage(5), height: RFPercentage(5), marginLeft: RFPercentage(4) }} source={require('../../assets/images/2.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} >
                            <Image style={{ width: RFPercentage(5), height: RFPercentage(5), marginLeft: RFPercentage(4) }} source={require('../../assets/images/3.png')} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ fontSize: RFPercentage(4), color: '#FFF965', marginTop: RFPercentage(3), fontWeight: 'bold' }} >
                        TXTR
                    </Text>

                    <Text style={{ fontSize: RFPercentage(2.9), color: '#ffff', marginTop: RFPercentage(3), fontWeight: 'bold' }} >
                        What is your name?
                    </Text>

                    {/* Input Field */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: RFPercentage(2) }} >
                                <InputField
                                    placeholderColor={Colors.white}
                                    height={RFPercentage(6.2)}
                                    backgroundColor={Colors.white}
                                    borderWidth={RFPercentage(0)}
                                    borderColor={Colors.blue}
                                    borderRadius={RFPercentage(1.1)}
                                    color={Colors.black}
                                    fontSize={RFPercentage(2)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    width={"85%"}
                                />
                            </View>
                        ))}
                    </View>

                    <Text style={{ fontSize: RFPercentage(2.9), color: '#ffff', marginTop: RFPercentage(3), fontWeight: 'bold' }} >
                        How old are you?
                    </Text>

                    {/* Input Field */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        {inputField2.map((item, i) => (
                            <View key={i} style={{ marginTop: RFPercentage(2) }} >
                                <InputField
                                    placeholderColor={Colors.white}
                                    height={RFPercentage(6.2)}
                                    backgroundColor={Colors.white}
                                    borderWidth={RFPercentage(0)}
                                    borderColor={Colors.blue}
                                    borderRadius={RFPercentage(1.1)}
                                    color={Colors.black}
                                    fontSize={RFPercentage(2)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    width={"85%"}
                                />
                            </View>
                        ))}
                    </View>

                    {/* Button */}
                    <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("ChatScreen")} style={{ marginTop: RFPercentage(10), width: '75%', height: RFPercentage(5.6), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: RFPercentage(9) }} >
                        <Image style={{ width: RFPercentage(5), height: RFPercentage(5), position: 'absolute', left: 5 }} source={require('../../assets/images/current.png')} />
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: 'bold' }} >
                            Let's Talk!
                        </Text>
                        <Image style={{ width: RFPercentage(5), height: RFPercentage(5), position: 'absolute', right: 5 }} source={require('../../assets/images/current.png')} />
                    </TouchableOpacity>

                    {/*Country Picker Library */}
                    <CountryPicker
                        show={show}
                        //We can get code of selected country by item.dial_code prop
                        pickerButtonOnPress={(item) => {
                            setCountryFlag(item.flag);
                            setShow(false);
                        }}
                    />
                </View>
            </ScrollView>
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


export default HomeScreen;