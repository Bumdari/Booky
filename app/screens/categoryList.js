import React from 'react';
import { SectionList, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import scale from '../assets/scale';
import imagesPath from '../assets/themes/imagesPath';


const { Back } = imagesPath;

export default function CategoryList({ navigator }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <Image
                        style={styles.images}
                        source={Back}
                    />
                </TouchableOpacity>
            </View>
            <SectionList
                sections={[
                    { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
                    { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => `basicListEntry-${item.title}`}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    images: {
        height: scale(40),
        width: scale(40)
    }
})