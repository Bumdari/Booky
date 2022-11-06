import React, { useState } from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import scale from "../../assets/scale";

import mainStyle from "../../assets/styles";
import imagesPath from "../../assets/themes/imagesPath";
import Header from "../../components/header";
import HomeBookCover from "../../components/homeBookCover";
import BookDetail from "../bookDetail";

const { Book1, Book2, Book3, Book4 } = imagesPath;
const { width, height } = Dimensions.get('window');

export default function BookList({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
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
        {
            id: 5,
            author: "Walter Isaacson",
            name: "Code breaker",
            price: "20000",
            type: "read",
            book_cover: Book1
        }, {
            id: 6,
            author: "Kazuo Ishiguro",
            name: "Klara and the sun",
            price: "35000",
            type: "read",
            book_cover: Book2
        }, {
            id: 7,
            author: "Maggie O'Farrell",
            name: "Hamnet",
            price: "20000",
            type: "read",
            book_cover: Book3
        }, {
            id: 8,
            author: "Jeff Hawkins",
            name: "A Thousand brains",
            price: "20000",
            type: "read",
            book_cover: Book4
        },
    ];

    const renderItem = ({ item }) => (
        <HomeBookCover
            price={item.price}
            author={item.author}
            bookImage={item.book_cover}
            onPress={() => { setModalVisible(true) }}
            style={styles.bookCover}
        />
    );

    return (
        <View style={styles.body}>
            <Header isback={true} title={'Book List'} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={BooksData}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ paddingLeft: scale(20) }}
            />
            <BookDetail
                modalVisible={modalVisible}
                onCancel={() => { setModalVisible(false) }}
                onCLick={() => {
                    setModalVisible(false);
                    navigation.navigate('bookrender')
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    ...mainStyle,
    bookCover: {
        width: (width - scale(70)) / 2,
        resizeMode: 'cover'
    }
})