
import React from 'react';
import { WebView } from 'react-native-webview';


const DetailScreen = ({route}) => {
  const external_url = route.params.external_url
  return (<WebView source={{ uri: external_url }}/>);
  };

export default DetailScreen;
