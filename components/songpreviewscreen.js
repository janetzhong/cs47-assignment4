
import React from 'react';
import { WebView } from 'react-native-webview';


const PreviewScreen = ({route}) => {
  const preview_url = route.params.preview_url
    return (<WebView source={{ uri: preview_url }}/>);
};

export default PreviewScreen;


