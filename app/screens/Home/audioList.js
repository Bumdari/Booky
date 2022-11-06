import React, { useState } from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import scale from "../../assets/scale";

import mainStyle from "../../assets/styles";
import imagesPath from "../../assets/themes/imagesPath";
import Header from "../../components/header";
import HomeAudioCover from "../../components/homeAudioCover";
import HomeBookCover from "../../components/homeBookCover";
import PodcastDetail from "../podcastDetail";

const { Podcast1, Podcast2 } = imagesPath;
const { width, height } = Dimensions.get('window');

export default function AudioList({ navigation }) {
    const [podcastVisible, setpodcastVisible] = useState(false);

    const AudioData = [
        {
            id: 1,
            author: "Ideree's podcast",
            name: "About Science",
            price: "20000",
            type: "audio",
            audio_cover: Podcast1
        },
        {
            id: 2,
            author: "Ideree's podcast",
            name: "About Fiction",
            price: "20000",
            type: "audio",
            audio_cover: Podcast2
        },
    ];

    const renderItem = ({ item }) => (
        <HomeAudioCover
            name={item.name}
            author={item.author}
            audioImage={item.audio_cover}
            onPress={() => { setpodcastVisible(true) }}
            style={styles.audioCover}
        />
    );

    return (
        <View style={styles.body}>
            <Header isback={true} title={'Audio List'} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={AudioData}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ paddingLeft: scale(20) }}
            />
            <PodcastDetail
                modalVisible={podcastVisible}
                onCancel={() => { setpodcastVisible(false) }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    ...mainStyle,
    audioCover: {
        width: (width - scale(70)) / 2,
        resizeMode: 'cover'
    }
})