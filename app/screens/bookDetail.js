import React, { useEffect } from 'react';
import { Modal, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import scale from '../assets/scale';
import imagesPath from '../assets/themes/imagesPath';
import Mainstyles from '../assets/styles';


const { Back, Book3, Close, Star, File, Person } = imagesPath;
const { width } = Dimensions.get('screen');

export default function BookDetail({ modalVisible, onCancel, onCLick }) {
    const navigation = useNavigation();
    useEffect(() => {
        console.log(modalVisible);
    }, [])
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.body}>
                <SafeAreaView>
                    <View style={styles.mainHeader}>
                        <TouchableOpacity onPress={() => { onCancel() }}>
                            <Image style={styles.images} source={Close} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainContainer}>
                        <View style={styles.bookAbsolute}>
                            <Image
                                style={styles.bookCover}
                                source={Book3}
                            />
                        </View>
                        <View style={styles.bookTitle}>
                            <View style={styles.bookHeader}>
                                <View style={styles.bookHeaderItem}>
                                    <Image
                                        style={styles.star}
                                        source={Star}
                                    />
                                    <View style={styles.bookHeaderTexts}>
                                        <Text style={[styles.h3, { color: '#1c1c24' }]}>{'4.9'}</Text>
                                        <Text style={[styles.font14, { color: '#90939e' }]}>{'Rating'}</Text>
                                    </View>
                                </View>
                                <View style={styles.bookHeaderItem}>
                                    <Image
                                        style={styles.star}
                                        source={File}
                                    />
                                    <View style={styles.bookHeaderTexts}>
                                        <Text style={[styles.h3, { color: '#1c1c24' }]}>{'198'}</Text>
                                        <Text style={[styles.font14, { color: '#90939e' }]}>{'Pages'}</Text>
                                    </View>
                                </View>
                                <View style={styles.bookHeaderItem}>
                                    <Image
                                        style={styles.star}
                                        source={Person}
                                    />
                                    <View style={styles.bookHeaderTexts}>
                                        <Text style={[styles.h3, { color: '#1c1c24' }]}>{'837 +'}</Text>
                                        <Text style={[styles.font14, { color: '#90939e' }]}>{'Reading'}</Text>
                                    </View>
                                </View>
                            </View>
                            <ScrollView>
                                <View style={styles.bookDetailBody}>
                                    <Text style={[styles.font16, { color: '#90939e', marginTop: scale(5) }]}>{'Maggie O`Farrell '}</Text>
                                    <Text style={[styles.h2, { color: '#1c1c24' }]}>{'Hamnet '}</Text>
                                    <Text style={[styles.font16, { color: '#90939e', marginTop: scale(15) }]}>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}</Text>
                                </View>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    style={styles.horizontalScrollView}>
                                    <View style={styles.subHighlight}>
                                        <Text style={[styles.h2, { color: '#a774c1' }]}>{'#'}</Text>
                                        <Text style={[styles.font18, { marginLeft: scale(15), color: '#a774c1' }]}>{'Poem'}</Text>
                                    </View>
                                    <View style={[styles.subHighlight, { backgroundColor: '#fdd3e4' }]}>
                                        <Text style={[styles.h2, { color: '#e875a1' }]}>{'#'}</Text>
                                        <Text style={[styles.font18, { marginLeft: scale(15), color: '#e875a1' }]}>{'Story'}</Text>
                                    </View>
                                    <View style={[styles.subHighlight, { backgroundColor: '#d4dafa' }]}>
                                        <Text style={[styles.h2, { color: '#7887dd' }]}>{'#'}</Text>
                                        <Text style={[styles.font18, { marginLeft: scale(15), color: '#7887dd' }]}>{'Letrature'}</Text>
                                    </View>
                                </ScrollView>
                            </ScrollView>
                            <View style={styles.buyButtonContainer}>
                                <TouchableOpacity onPress={() => { onCLick() }}
                                    style={styles.buyButton}>
                                    <Text style={[styles.font16, { color: 'white' }]}>{'Buy a book'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    ...Mainstyles,
    images: {
        height: scale(30),
        width: scale(30)
    },
    star: {
        marginTop: scale(5),
        height: scale(20),
        width: scale(20)
    },
    subHighlight: {
        paddingHorizontal: scale(25),
        paddingVertical: scale(10),
        backgroundColor: '#e6d2f0',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(10),
        marginRight: scale(15),
        marginTop: scale(20)
    },
    body: {
        flex: 1,
        backgroundColor: 'rgba(117,117,117,0.7)'
    },
    mainHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: scale(20)
    },
    mainContainer: {
        height: '100%',
        justifyContent: 'flex-end'
    },
    bookAbsolute: {
        position: 'absolute', top: 10, elevation: 10, zIndex: 999, left: scale(30), width: '100%', flexDirection: 'row'
    },
    bookCover: {
        height: scale(220), width: scale(150), borderRadius: scale(16)
    },
    bookTitle: {
        height: '95%', backgroundColor: '#ffffff', borderTopStartRadius: scale(16), borderTopEndRadius: scale(16)
    },
    bookHeader: {
        marginLeft: '48%', marginTop: scale(25)
    },
    bookHeaderItem: {
        flexDirection: 'row', marginBottom: scale(15)
    },
    bookHeaderTexts: {
        marginLeft: scale(10)
    },
    bookDetailBody: {
        paddingLeft: scale(30), marginTop: scale(10), paddingRight: scale(20)
    },
    horizontalScrollView: {
        paddingLeft: scale(30), marginTop: scale(20)
    },
    buyButtonContainer: {
        position: 'absolute', bottom: scale(60), width: '100%', alignItems: 'center'
    },
    buyButton: {
        backgroundColor: '#3a3967', padding: scale(20), width: width * .8, alignItems: 'center', borderRadius: scale(8)
    }
})