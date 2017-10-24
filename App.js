//library
//import ReactNative from 'react-native'; == es5 kebawah
import { Text, View } from 'react-native'; //de-structuring, mempersingkat penulisan 
//supaya (bg2) tidak ditulis lagi
import React from 'react';
//file
import Header from './src/components/Header'; 

import AlbumList from './src/components/AlbumList';
// . <- local folder, kalao file nya .js boleh ga ditulis
  

//const Text = ReactNative.Text; (bg2)

const App = () => {
  return (
    
      <View style={{flex:1}}>
        <Header title={'My Album'} />
        < AlbumList />
      </View>

      
      // < header title={'My Album'} />
    
      //header judul={'facebook'} /> //props - hanya bisa akses parent ke child.
    
  );
};

export default App;