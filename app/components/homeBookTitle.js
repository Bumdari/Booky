
import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import mainStyles from "../assets/styles";
import scale from '../assets/scale';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imagesPath from '../assets/themes/imagesPath';

const { width, height } = Dimensions.get('window');

const { Chevron_Right } = imagesPath;

export default HomeBookTitle = ({ title, onPress }) => {
    const { colors } = useTheme();
    const font14_blue = {
        ...mainStyles.font14,
        color: colors.blue_33
    }
    return (
        <View style={styles.item}>
            <Text style={styles.font18_gray}>{`${title}`}</Text>
            {onPress ?
                <TouchableOpacity
                    onPress={() => onPress()}
                    style={styles.rigth_icon_container}>
                    <Image source={Chevron_Right} style={styles.right_icon} />
                </TouchableOpacity>
                :
                <View />
            }
        </View>
    );

};

const styles = StyleSheet.create({
    ...mainStyles,
    item: {
        paddingHorizontal: scale(20),
        paddingVertical: scale(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rigth_icon_container: {
        width: scale(70),
        alignItems: 'flex-end',
    },
    right_icon: {
        height: scale(22), width: scale(22)
    }
})