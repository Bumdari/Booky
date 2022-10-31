import React, { useEffect } from 'react';
import { Modal, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import scale from '../assets/scale';
import imagesPath from '../assets/themes/imagesPath';
import Mainstyles from '../assets/styles';


const { Back, Podcast1, Close, Play } = imagesPath;
const { width } = Dimensions.get('screen');

export default function PodcastDetail({ navigator, modalVisible, onCancel }) {
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
            <View style={{ flex: 1, backgroundColor: 'rgba(117,117,117,0.7)' }}>
                <SafeAreaView>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: scale(20) }}>
                        <TouchableOpacity
                            onPress={() => {
                                onCancel()
                            }}>
                            <Image
                                style={styles.images}
                                source={Close}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: '100%', justifyContent: 'flex-end' }}>
                        <View style={{ position: 'absolute', top: 10, elevation: 10, zIndex: 999, left: scale(30), width: '100%', flexDirection: 'row' }}>
                            <Image
                                style={{ height: scale(150), width: scale(150), borderRadius: scale(160) }}
                                source={Podcast1}
                            />
                        </View>
                        <View style={{ height: '95%', backgroundColor: '#ffffff', borderTopStartRadius: scale(16), borderTopEndRadius: scale(16) }}>
                            <View style={{ marginLeft: '48%', marginTop: scale(25) }}>
                                <Text style={[styles.h3, { color: '#1c1c24' }]}>{'Ideree`s podcast'}</Text>

                                <TouchableOpacity style={{ paddingVertical: scale(10) }}>
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                        colors={['#113dbc', '#5241e3', '#7544fb']}
                                        style={{ paddingHorizontal: scale(20), paddingVertical: scale(10), backgroundColor: '#7544fb', width: scale(200), borderRadius: scale(5), alignItems: 'center' }}>
                                        <Text style={[styles.font14_bold, { color: 'white' }]}>{'Subscribe'}</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            <ScrollView>
                                <View style={{ paddingLeft: scale(30), marginTop: scale(30), paddingRight: scale(20) }}>
                                    <Text style={[styles.font16, { color: '#90939e', marginTop: scale(5) }]}>{'Maggie O`Farrell '}</Text>
                                    <Text style={[styles.h2, { color: '#1c1c24' }]}>{'Hamnet '}</Text>
                                    <Text numberOfLines={4} style={[styles.font16, { color: '#90939e', marginTop: scale(15) }]}>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}</Text>
                                </View>
                                <View style={{ paddingLeft: scale(30), marginTop: scale(20), paddingRight: scale(20) }}>
                                    <Text style={[styles.h2, { color: '#1c1c24' }]}>{'Podcast '}</Text>
                                    <TouchableOpacity style={styles.subpodcasts}>
                                        <View>
                                            <Text style={[styles.font16, { color: '#1c1c24', marginBottom: scale(8) }]}>{'Шинжлэх ухаан'}</Text>
                                            <Text style={styles.font14}>{'by D.Ph. Б. Бумцэнд'}</Text>
                                            <Text style={[styles.font14, { color: '#1c1c24', marginTop: scale(8) }]}>{'10 min'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Image
                                                style={{ height: scale(30), width: scale(30), position: 'absolute' }}
                                                source={Play}
                                            />
                                            <AnimatedCircularProgress
                                                size={scale(50)}
                                                width={5}
                                                fill={70}
                                                lineCap='round'
                                                tintColor="#7887dd"
                                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                                backgroundColor="#ffffff" />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.subpodcasts}>
                                        <View>
                                            <Text style={[styles.font16, { color: '#1c1c24', marginBottom: scale(8) }]}>{'Биологи ухаан'}</Text>
                                            <Text style={styles.font14}>{'by D.Ph. Б. Бумцэнд'}</Text>
                                            <Text style={[styles.font14, { color: '#1c1c24', marginTop: scale(8) }]}>{'13 min'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', width: scale(50) }}>
                                            <Image
                                                style={{ height: scale(30), width: scale(30), position: 'absolute' }}
                                                source={Play}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.subpodcasts}>
                                        <View>
                                            <Text style={[styles.font16, { color: '#1c1c24', marginBottom: scale(8) }]}>{'Нано инженерчлэл ухаан'}</Text>
                                            <Text style={styles.font14}>{'by D.Ph. Б. Бумцэнд'}</Text>
                                            <Text style={[styles.font14, { color: '#1c1c24', marginTop: scale(8) }]}>{'13 min'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', width: scale(50) }}>
                                            <Image
                                                style={{ height: scale(30), width: scale(30), position: 'absolute' }}
                                                source={Play}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.subpodcasts}>
                                        <View>
                                            <Text style={[styles.font16, { color: '#1c1c24', marginBottom: scale(8) }]}>{'Генийн тухай'}</Text>
                                            <Text style={styles.font14}>{'by D.Ph. Б. Бумцэнд'}</Text>
                                            <Text style={[styles.font14, { color: '#1c1c24', marginTop: scale(8) }]}>{'13 min'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', width: scale(50) }}>
                                            <Image
                                                style={{ height: scale(30), width: scale(30), position: 'absolute' }}
                                                source={Play}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.subpodcasts}>
                                        <View>
                                            <Text style={[styles.font16, { color: '#1c1c24', marginBottom: scale(8) }]}>{'Генийн тухай'}</Text>
                                            <Text style={styles.font14}>{'by D.Ph. Б. Бумцэнд'}</Text>
                                            <Text style={[styles.font14, { color: '#1c1c24', marginTop: scale(8) }]}>{'13 min'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', width: scale(50) }}>
                                            <Image
                                                style={{ height: scale(30), width: scale(30), position: 'absolute' }}
                                                source={Play}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.subpodcasts}>
                                        <View>
                                            <Text style={[styles.font16, { color: '#1c1c24', marginBottom: scale(8) }]}>{'Генийн тухай'}</Text>
                                            <Text style={styles.font14}>{'by D.Ph. Б. Бумцэнд'}</Text>
                                            <Text style={[styles.font14, { color: '#1c1c24', marginTop: scale(8) }]}>{'13 min'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', width: scale(50) }}>
                                            <Image
                                                style={{ height: scale(30), width: scale(30), position: 'absolute' }}
                                                source={Play}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.subpodcasts}>
                                        <View>
                                            <Text style={[styles.font16, { color: '#1c1c24', marginBottom: scale(8) }]}>{'Генийн тухай'}</Text>
                                            <Text style={styles.font14}>{'by D.Ph. Б. Бумцэнд'}</Text>
                                            <Text style={[styles.font14, { color: '#1c1c24', marginTop: scale(8) }]}>{'13 min'}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', width: scale(50) }}>
                                            <Image
                                                style={{ height: scale(30), width: scale(30), position: 'absolute' }}
                                                source={Play}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ height: scale(60) }} />
                                </View>
                            </ScrollView>
                            {/* <View style={{ position: 'absolute', bottom: scale(60), width: '100%', alignItems: 'center' }}>
                                <TouchableOpacity style={{ backgroundColor: '#3a3967', padding: scale(20), width: width * .8, alignItems: 'center', borderRadius: scale(8) }}>
                                    <Text style={[styles.font16, { color: 'white' }]}>{'Start Podcast'}</Text>
                                </TouchableOpacity>
                            </View> */}
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
    subpodcasts: {
        flexDirection: 'row',
        backgroundColor: '#d4dafa',
        paddingHorizontal: scale(20),
        paddingVertical: scale(15),
        marginBottom: scale(6),
        borderRadius: scale(6),
        justifyContent: 'space-between',
        borderLeftWidth: 3,
        borderLeftColor: "#7887dd"
    }
})