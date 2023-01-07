import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons, Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

//config
import Colors from "../../config/Colors";

function InputField({
    onTouchStart = () => { },
    onTouchEnd = () => { },
    placeholder,
    multipleLines = false,
    handleFeild,
    icons = false,
    borderColor = Colors.white,
    borderWidth = RFPercentage(0),
    fontFamily = null,
    placeholderColor = "#B4B6B8",
    borderRadius = RFPercentage(1),
    backgroundColor = Colors.white,
    keyboardType = "default",
    textCenter = "left",
    searchIcon = false,
    fontSize = RFPercentage(2.5),
    editIcon = false,
    dropdownIcon = false,
    placeholderAtCenter = false,
    width,
    value,
    height = RFPercentage(6.9),
    secure = false,
    handleClear = false,
    placeholderAtStart = false,
    leftIconName = '',
    autoFocus = false,
    searchMarginLeft = null,
    color = "black",
    ...otherProps
}) {

    return (
        <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: borderWidth, width: width, height: height, borderRadius: borderRadius, marginVertical: RFPercentage(0.7), }} >

            {icons ? (
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', position: "absolute", right: RFPercentage(1) }}>

                    {/* <Image style={{ alignItems: 'center', justifyContent: 'center', position: "absolute", right: RFPercentage(1), width: RFPercentage(16), height: RFPercentage(2.3) }} source={require('../../../assets/images/cicons.png')} /> */}
                </TouchableOpacity>
            ) : null}

            {searchIcon ? (
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', position: "absolute", right: RFPercentage(1) }}>
                    <EvilIcons name="search" style={{ fontSize: RFPercentage(3), position: "absolute", right: RFPercentage(1) }} color="#676767" />
                </TouchableOpacity>
            ) : null}


            <TextInput
                placeholder={placeholder}
                multiline={multipleLines ? true : false}
                placeholderTextColor={placeholderColor}
                onChangeText={(text) => handleFeild(text)}
                onResponderStart={onTouchStart}
                onEndEditing={onTouchEnd}
                value={value}
                autoFocus={autoFocus}
                keyboardType={keyboardType}
                secureTextEntry={secure && !eyeIcon}
                // textAlign={"right"}
                style={{ flexWrap: 'wrap', top: placeholderAtStart ? RFPercentage(-3) : 0, color: color, alignSelf: "center", fontFamily: fontFamily, fontSize: fontSize, width: '90%' }}
                {...otherProps}
            >

            </TextInput>

        </View>
    );
}

export default InputField;