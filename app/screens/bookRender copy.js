import { useRef } from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
// import Pdf from 'react-native-pdf';

// import { ReactEpubViewer } from "react-epub-viewer";
// import ReactDOM from "react-dom";
import EpubBuilder, { FsSettings, ReadDirItem, EpubChapter, EpubSettings, EpubLoader, getValidFileNameByTitle } from 'react-native-epub-creator';
import scale from '../assets/scale';
import imagesPath from '../assets/themes/imagesPath';

const { Back } = imagesPath;

export default function BookRender({ navigation }) {
    const viewerRef = useRef(null);
    const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    return (
        <View>

        </View>
    );
    // return (
    //     <SafeAreaView>
    //         <View style={{ height: '100%', paddingHorizontal: scale(20) }}>
    //             <View>
                    // <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    //     <Image
                    //         style={{ height: 30, width: 30 }}
                    //         source={Back}
                    //     />
                    // </TouchableOpacity>
    //             </View>
    //             <Pdf
    //                 source={source}
    //                 onLoadComplete={(numberOfPages, filePath) => {
    //                     console.log(`Number of pages: ${numberOfPages}`);
    //                 }}
    //                 onPageChanged={(page, numberOfPages) => {
    //                     console.log(`Current page: ${page}`);
    //                 }}
    //                 onError={(error) => {
    //                     console.log(error);
    //                 }}
    //                 onPressLink={(uri) => {
    //                     console.log(`Link pressed: ${uri}`);
    //                 }}
    //                 style={styles.pdf} />
    //             {/* <ReactEpubViewer
    //                 url={
    //                     "https://altmshfkgudtjr.github.io/react-epub-viewer/files/Alices%20Adventures%20in%20Wonderland.epub"
    //                 }
    //                 ref={viewerRef}
    //             /> */}
    //         </View>
    //     </SafeAreaView>
    // );
}