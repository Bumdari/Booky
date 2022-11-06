
import React from 'react';
import { Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import mainStyles from "../assets/styles";
import scale from '../assets/scale';
import imagesPath from '../assets/themes/imagesPath';
import Helper, { MoneyFormater } from '../commons/helper';

const { width, height } = Dimensions.get('window');
const { Card, Icon1, Icon2, Icon3, Icon4, Book1, Book2, Book3, Book4, Podcast1, Podcast2 } = imagesPath;

export default HomeBookCover = ({ price, author, bookImage, onPress, style }) => {
    const { colors } = useTheme();

    const font16 = {
        ...mainStyles.font16,
        marginTop: scale(15),
        color: colors.black_1C
    }
    const font14 = {
        ...mainStyles.font14,
        color: colors.gray_86,
        textAlign: 'left'
    }
    return (
        <TouchableOpacity
            style={styles.padding10}
            onPress={() => onPress()}>
            <Image
                style={[styles.bookCover, style]}
                source={bookImage}
            />
            <Text style={font16}>{`Price : ${MoneyFormater(price)} ₮`}</Text>
            <Text style={font14}>{`by ${author}`}</Text>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    ...mainStyles,
    padding10: {
        paddingRight: scale(35),
        marginVertical: scale(10)
    },
    bookCover: {
        height: scale(230),
        width: scale(150),
        resizeMode: 'contain',
        borderRadius: scale(10)
    },
})