import React, { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';

import scale from "../../assets/scale";
import styles from "../../assets/styles";
import imagesPath from "../../assets/themes/imagesPath";
import HomeAudioCover from "../../components/homeAudioCover";
import HomeBookCategory from "../../components/homeBookCategory";
import HomeBookCover from "../../components/homeBookCover";
import HomeBookTitle from "../../components/homeBookTitle";
import BookDetail from "../bookDetail";
import PodcastDetail from "../podcastDetail";

const { Card, Icon1, Icon2, Icon3, Icon4, Book1, Book2, Book3, Book4, Podcast1, Podcast2 } = imagesPath;

export default function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [podcastVisible, setpodcastVisible] = useState(false);

    const BooksData = [
        {
            id: 1,
            author: "Walter Isaacson",
            name: "Code breaker",
            price: "20000",
            type: "read",
            book_cover: Book1
        }, {
            id: 2,
            author: "Kazuo Ishiguro",
            name: "Klara and the sun",
            price: "35000",
            type: "read",
            book_cover: Book2
        }, {
            id: 3,
            author: "Maggie O'Farrell",
            name: "Hamnet",
            price: "20000",
            type: "read",
            book_cover: Book3
        }, {
            id: 4,
            author: "Jeff Hawkins",
            name: "A Thousand brains",
            price: "20000",
            type: "read",
            book_cover: Book4
        },
    ];
    const AudioData = [
        {
            id: 1,
            author: "Ideree's podcast",
            name: "About Science",
            price: "20000",
            type: "audio",
            audio_cover: Podcast1
        },
    ]
    const categories = [
        {
            id: 1,
            name: "Finance",
            icon: Icon1
        },
        {
            id: 2,
            name: "Health",
            icon: Icon2
        },
        {
            id: 3,
            name: "Business",
            icon: Icon3
        },
        {
            id: 4,
            name: "Travel",
            icon: Icon4
        },
        {
            id: 5,
            name: "Travel",
            icon: Icon4
        },
    ]
    const renderCategoryItem = ({ item }) => (
        <HomeBookCategory
            name={item.name}
            icon={item.icon}
            onPress={() => { console.log('blah blah blah ....'); }}
        />
    );

    const renderItem = ({ item }) => (
        <HomeBookCover
            price={item.price}
            author={item.author}
            bookImage={item.book_cover}
            onPress={() => { setModalVisible(true) }}
        />
    );

    const renderAudioItem = ({ item }) => (
        <HomeAudioCover
            name={item.name}
            author={item.author}
            audioImage={item.audio_cover}
            onPress={() => { setpodcastVisible(true) }}
        />
    );

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
                    <HomeBookTitle title={'Categories'} />
                    <FlatList
                        data={categories}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderCategoryItem}
                        keyExtractor={item => item.id}
                        style={{ paddingLeft: scale(20) }}
                    />
                    <HomeBookTitle title={'Most Popular'} onPress={() => { navigation.navigate('bookList') }} />
                    <FlatList
                        data={BooksData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        style={{ paddingLeft: scale(20) }}
                    />
                    <HomeBookTitle title={'Most Popular Podcast'} onPress={() => { navigation.navigate('audioList') }} />
                    <FlatList
                        data={AudioData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderAudioItem}
                        keyExtractor={item => item.id}
                        style={{ paddingLeft: scale(20) }}
                    />
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
            <PodcastDetail
                modalVisible={podcastVisible}
                onCancel={() => { setpodcastVisible(false) }}
            />
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


})