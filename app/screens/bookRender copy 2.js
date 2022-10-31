import EpubBuilder, { FsSettings, ReadDirItem, EpubChapter, EpubSettings, EpubLoader, getValidFileNameByTitle } from 'react-native-epub-creator';
// the library best work with react-native-fs but you could use your own library instead
import * as RNFS from 'react-native-fs';

   const [progress, setProgress] = React.useState(0)
   EpubBuilder.onProgress = (progress, file)=> {
      setProgress(progress)
    }
     var epub = new EpubBuilder({
      title: "example",
      fileName: getValidFileNameByTitle("examplefile-%1"), // optional, it will take title if not set
      language: "en",
      description: "this is a epub test",
      stylesheet: {
        p: {
          width: "100%"
        }
      },
      chapters: [{
        title: "Air born",
        htmlBody: "<p>this is chapter 1</p>"
      }, {
        title: "chapter 2",
        htmlBody: "<p>this is chapter 2</p>"
      }]
    }, RNFS.DownloadDirectoryPath, RNFS);
    try{     
      // save and create the .epub file
      var epubFilePath = await epub.save();
    }catch(error){
     // remove the temp created folder
     await epub.discardChanges();
    }