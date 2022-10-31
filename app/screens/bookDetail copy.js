import React, { useEffect } from 'react';
import { Modal, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import scale from '../assets/scale';
import imagesPath from '../assets/themes/imagesPath';
import Mainstyles from '../assets/styles';


const { Back, Book3, Close, Star } = imagesPath;

export default function BookDetail({ navigator, modalVisible }) {
    const navigation = useNavigation();
    useEffect(() => {
        console.log(modalVisible);
    }, [])
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={{ flex: 1, backgroundColor: 'rgba(117,117,117,0.7)' }}>
                <SafeAreaView>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: scale(20) }}>
                        <TouchableOpacity>
                            <Image
                                style={styles.images}
                                source={Close}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: '100%', justifyContent: 'flex-end' }}>
                        <View style={{ position: 'absolute', top: 0, elevation: 10, zIndex: 999, width: '100%', alignItems: 'center' }}>
                            <Image
                                style={{ height: scale(200), width: scale(150), borderRadius: scale(16) }}
                                source={Book3}
                            />
                            <View style={{ flexDirection: 'row', paddingVertical: scale(20) }}>
                                <Image
                                    style={styles.star}
                                    source={Star}
                                />
                                <Text style={[styles.font14_bold, { marginLeft: scale(10) }]}>{'4.2 '}</Text>
                                <Text style={[styles.font14_bold, { marginLeft: scale(10) }]}>{'・'}</Text>
                                <Text style={[styles.font14_bold, { marginLeft: scale(10) }]}>{'2.492  Review'}</Text>
                            </View>
                            <Text style={[styles.h2, { color: '#1c1c24' }]}>{'Hamnet '}</Text>
                            <Text style={[styles.font16, { color: '#90939e', marginTop: scale(5) }]}>{'Maggie O`Farrell '}</Text>
                        </View>
                        <View style={{ height: '93%', backgroundColor: '#ffffff', borderTopStartRadius: scale(16), borderTopEndRadius: scale(16) }}>

                        </View>
                    </View>

                </SafeAreaView>
            </View>
        </Modal>

        // <ImageBackground source={Book3} resizeMode={'cover'} style={{ width: '100%', height: scale(300) }}>
        //     <SafeAreaView style={{ flex: 1 }}>
        //         <View style={{ paddingHorizontal: scale(20) }}>
        //             <TouchableOpacity onPress={() => {
        //                 navigation.goBack()
        //             }}>
        //                 <Image
        //                     style={styles.images}
        //                     source={Back}
        //                 />
        //             </TouchableOpacity>
        //         </View>

        //     </SafeAreaView>
        // </ImageBackground>

    );
}

const styles = StyleSheet.create({
    ...Mainstyles,
    images: {
        height: scale(30),
        width: scale(30)
    },
    star: {
        height: scale(20),
        width: scale(20)
    }
})