
import React from 'react';
import { Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import mainStyles from "../assets/styles";
import scale from '../assets/scale';
import imagesPath from '../assets/themes/imagesPath';
import Helper, { MoneyFormater } from '../commons/helper';

const { width, height } = Dimensions.get('window');

export default HomeAudioCover = ({ name, author, audioImage, onPress, style }) => {
    const { colors } = useTheme();

    const font16 = {
        ...mainStyles.font16,
        marginTop: scale(15),
        color: colors.black_1C
    }
    const font14 = {
        ...mainStyles.font14_gray,
        textAlign: 'left'
    }
    return (
        <TouchableOpacity
            style={styles.padding10}
            onPress={() => onPress()}>
            <Image
                style={[styles.audioCover, style]}
                source={audioImage}
            />
            <Text style={font16}>{`${name}`}</Text>
            <Text style={font14}>{`by ${author}`}</Text>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    ...mainStyles,
    padding10: {
        paddingRight: scale(35)
    },
    audioCover: {
        height: scale(150),
        width: scale(150),
        resizeMode: 'contain',
        borderRadius: scale(150)
    },
})