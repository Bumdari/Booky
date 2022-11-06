import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';

import mainStyles from "../assets/styles";

import imagesPath from '../assets/themes/imagesPath';
import scale from '../assets/scale';

const btn_height = scale(40);

export default Header = ({
    style,
    title,
    isback,
    isCustom,
    isNotif,
}) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const { Chevron_Left } = imagesPath;
    
    const container = {
        height: btn_height + scale(8 * 2),
        width: '100%',
        flexDirection: 'row',
        paddingVertical: scale(8),
        // paddingHorizontal: scale(16),
        alignItems: 'center',
        ...style,
    };
    const label = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    };
    const font_18 = {
        color: colors.black_1C,
        ...mainStyles.font_18,
    };

    return (
        <View>
            <SafeAreaView />
            <View style={container}>
                {isback ? (
                    <TouchableOpacity
                        onPress={() => { isCustom ? isCustom() : navigation.goBack(); }}
                        style={styles.btn}
                    >
                        <Image source={Chevron_Left} style={styles.back_btn} />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.btn} />
                )}
                <View style={label}>
                    <Text style={font_18}>{title}</Text>
                </View>
                {isNotif ? (
                    <TouchableOpacity
                        style={styles.btn} >
                    </TouchableOpacity>
                ) : (
                    <View style={styles.btn} />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    back_btn: {
        height: scale(26), width: scale(26), resizeMode: 'contain'
    },
    btn: {
        height: scale(50),
        width: scale(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
});
