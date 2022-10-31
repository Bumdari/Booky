import { useRef } from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView, Dimensions } from "react-native";
import { Reader, ReaderProvider } from '@epubjs-react-native/core';
import { useFileSystem } from '@epubjs-react-native/file-system';

import imagesPath from '../assets/themes/imagesPath';
import scale from '../assets/scale';
import styles from '../assets/styles';

const { Back } = imagesPath;
const { width, height } = Dimensions.get('screen');
export default function BookRender({ navigation }) {
    const viewerRef = useRef(null);
    const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    return (
        <SafeAreaView>
            <View style={{ paddingHorizontal: scale(20), paddingVertical: scale(16), backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={Back}
                    />
                </TouchableOpacity>
                <Text style={[styles.font18, { flex: 1, textAlign: 'center' }]}>{'Alices Adventures in Wonderland'}</Text>

            </View>
            <ReaderProvider>
                <Reader
                    src="https://altmshfkgudtjr.github.io/react-epub-viewer/files/Alices%20Adventures%20in%20Wonderland.epub"
                    width={width}
                    height={height - scale(62 + 120)}
                    fileSystem={useFileSystem}
                    onDisplayError={(error) => {
                        console.log(error);
                    }}
                    onFinish={(finish) => {
                        console.log("asd");
                        console.log(finish);
                    }}
                    onBeginning={(begin) => {
                        console.log("asd");
                        console.log(begin);
                    }}
                />
            </ReaderProvider>
        </SafeAreaView>
    );
}