import React, { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';

import scale from "../assets/scale";
import styles from "../assets/styles";
import imagesPath from "../assets/themes/imagesPath";
import BookDetail from "./bookDetail";
import PodcastDetail from "./podcastDetail";

const { Card, Icon1, Icon2, Icon3, Icon4, Book1, Book2, Book3, Book4, Podcast1, Podcast2 } = imagesPath;

export default function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [podcastVisible, setpodcastVisible] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[style.body]}>
                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    colors={['#113dbc', '#5241e3', '#7544fb']}
                    style={style.linearGradient}>
                    <Text style={style.h2}>{'Find a best \nbook for you'}</Text>
                    <View style={style.card}>
                        <Image
                            style={style.images}
                            source={Card}
                        />
                        <View style={style.card_text}>
                            <Text style={style.font18}>{'Adventure'}</Text>
                            <Text style={style.font14}>{'Continue reading'}</Text>
                        </View>
                        <AnimatedCircularProgress
                            size={scale(50)}
                            width={5}
                            fill={70}
                            lineCap='round'
                            tintColor="#ffffff"
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#ea7575" />
                    </View>
                </LinearGradient>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={style.padding30}>
                        <Text style={style.font18_gray}>{'Categories'}</Text>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingLeft: scale(20) }}>
                            <TouchableOpacity
                                style={style.padding10}
                                onPress={() => {
                                    navigation.navigate('Category')
                                }}>
                                <Image
                                    style={style.icons}
                                    source={Icon1}
                                />
                                <Text style={style.font14_gray}>{'Finance'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.padding10}>
                                <Image
                                    style={style.icons}
                                    source={Icon2}
                                />
                                <Text style={style.font14_gray}>{'Health'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.padding10}>
                                <Image
                                    style={style.icons}
                                    source={Icon3}
                                />
                                <Text style={style.font14_gray}>{'Business'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.padding10}>
                                <Image
                                    style={style.icons}
                                    source={Icon4}
                                />
                                <Text style={style.font14_gray}>{'Travel'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.padding10}>
                                <Image
                                    style={style.icons}
                                    source={Icon4}
                                />
                                <Text style={style.font14_gray}>{'Someone'}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={style.padding30}>
                        <Text style={style.font18_gray}>{'Most Popular'}</Text>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingLeft: scale(20) }}>
                            <TouchableOpacity
                                style={style.padding10}
                                onPress={() => {
                                    setModalVisible(true)
                                }}>
                                <Image
                                    style={style.bookCover}
                                    source={Book3}
                                />
                                <Text style={[style.font16, { color: '#1c1c24', marginTop: scale(15) }]}>{'Price : 20,000 ₮'}</Text>
                                <Text style={[style.font14_gray, { textAlign: 'left' }]}>{'by Maggie O`Farrell'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.padding10}>
                                <Image
                                    style={style.bookCover}
                                    source={Book1}
                                />
                                <Text style={[style.font16, { color: '#1c1c24', marginTop: scale(15) }]}>{'Price : 35,000 ₮'}</Text>
                                <Text style={[style.font14_gray, { textAlign: 'left' }]}>{'by Walter Isaacson'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.padding10}>
                                <Image
                                    style={style.bookCover}
                                    source={Book4}
                                />
                                <Text style={[style.font16, { color: '#1c1c24', marginTop: scale(15) }]}>{'Price : 25,000 ₮'}</Text>
                                <Text style={[style.font14_gray, { textAlign: 'left' }]}>{'by Kazuo Ishiguro'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.padding10}>
                                <Image
                                    style={style.bookCover}
                                    source={Book2}
                                />
                                <Text style={[style.font16, { color: '#1c1c24', marginTop: scale(15) }]}>{'Price : 30,000 ₮'}</Text>
                                <Text style={[style.font14_gray, { textAlign: 'left' }]}>{'by Jeff Hawkins'}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={style.padding30}>
                        <Text style={style.font18_gray}>{'Most Popular Podcast'}</Text>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingLeft: scale(20) }}>
                            <TouchableOpacity
                                style={style.padding10}
                                onPress={() => {
                                    setpodcastVisible(true)
                                }}>
                                <Image
                                    style={style.podcastCOver}
                                    source={Podcast1}
                                />
                                <Text style={[style.font16, { color: '#1c1c24', marginTop: scale(15) }]}>{'About Science'}</Text>
                                <Text style={[style.font14_gray, { textAlign: 'left' }]}>{'by Ideree`s podcast'}</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
            <BookDetail
                modalVisible={modalVisible}
                onCancel={() => { setModalVisible(false) }}
                onCLick={() => {
                    setModalVisible(false);
                    navigation.navigate('bookrender')
                }}
            />
            <PodcastDetail modalVisible={podcastVisible} onCancel={() => { setpodcastVisible(false) }} />
        </SafeAreaView>

    );
}

const style = StyleSheet.create({
    ...styles,
    body: {
        ...styles.body,
        // padding: scale(20)
    },
    h2: {
        ...styles.h2,
        textAlign: 'center'
    },
    font14: {
        ...styles.font14,
        color: '#4e0103',
    },
    font14_gray: {
        ...styles.font14,
        color: '#868991',
        textAlign: 'center',
        marginTop: scale(8)
    },
    card: {
        padding: scale(20),
        marginTop: scale(20),
        flexDirection: 'row',
        backgroundColor: '#fe999e',
        borderRadius: scale(16),
        alignItems: 'center'
    },
    card_text: {
        marginLeft: scale(20),
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: scale(9)
    },
    padding30: {
        paddingHorizontal: scale(20),
        paddingVertical: scale(25)
    },
    padding10: {
        paddingRight: scale(35)
    },
    images: {
        height: scale(60), width: scale(60)
    },
    linearGradient: {
        paddingHorizontal: scale(20),
        paddingTop: scale(30),
        paddingBottom: scale(16),
        borderRadius: scale(16),
        marginHorizontal: scale(20),
        marginTop: scale(10),
        marginBottom: scale(10)
    },
    icons: {
        height: scale(70),
        width: scale(70)
    },
    bookCover: {
        height: scale(230),
        width: scale(150),
        resizeMode: 'contain',
        borderRadius: scale(10)
    },
    podcastCOver: {
        height: scale(150),
        width: scale(150),
        resizeMode: 'contain',
        borderRadius: scale(150)
    },
})