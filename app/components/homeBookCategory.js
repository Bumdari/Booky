
import React from 'react';
import { Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import mainStyles from "../assets/styles";
import scale from '../assets/scale';
import imagesPath from '../assets/themes/imagesPath';
import Helper, { MoneyFormater } from '../commons/helper';

const { width, height } = Dimensions.get('window');
const { Card, Icon1, Icon2, Icon3, Icon4, Book1, Book2, Book3, Book4, Podcast1, Podcast2 } = imagesPath;

export default HomeBookCover = ({ name, icon, onPress }) => {
    const { colors } = useTheme();

    const font14 = {
        ...mainStyles.font14_gray,
        textAlign: 'left'
    }

    return (
        <TouchableOpacity
            style={styles.padding10}
            onPress={() => onPress}>
            <Image
                style={styles.icons}
                source={icon}
            />
            <Text style={font14}>{`${name}`}</Text>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    ...mainStyles,
    padding10: {
        paddingRight: scale(35),
        alignItems:'center'
    },
    icons: {
        height: scale(70),
        width: scale(70)
    },
})