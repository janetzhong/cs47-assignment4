import { StyleSheet, SafeAreaView, Text , Pressable, Image, FlatList, View} from "react-native";
import { useSpotifyAuth } from "../utils";
import { Themes } from "../assets/Themes";
import {SignInScreen, Song} from '../components';

export default function MainScreen({ navigation }) {

  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;
  if (token) {
    
    // If token is true, show track list screen
    contentDisplayed = 

    // Flat List of Top Tracks
    <View style={styles.trackScreenContainer}>
      <View style={styles.header}>
      <Image style={styles.headerLogo} source={require("../assets/spotify-logo.png")} />
      <Text style={styles.headerText}> My Top Tracks </Text>
      </View>
    <FlatList data ={tracks}
    renderItem={({item}) => (
      <Song item={item} navigation={navigation} />
    )}/>
    </View>
  } 

  else {
    // If token is false, show sign-in screen screen
    contentDisplayed = <SignInScreen authFunction={getSpotifyAuth} />;
  }

  return (
    <SafeAreaView style={styles.container}>
    {contentDisplayed}
    </SafeAreaView>
  );

}const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  trackScreenContainer: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },  
  header: {
    backgroundColor: Themes.colors.background,
    flexDirection: 'row',
    alignItems: "center",
    margin: 5,
    padding: 10
  },
  headerLogo: {
    width: 30,
    height: 30
    },
  headerText: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 20,
    margin:5
    },
});

