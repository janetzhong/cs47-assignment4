import { StyleSheet, SafeAreaView, Text , Pressable, Image} from "react-native";
import { Themes } from "../assets/Themes";


const SignInScreen = ({authFunction}) => {
    return (
        <Pressable
        onPress = {authFunction}
        style = {styles.spotifyConnectButton}>
            <Image style={styles.spotifyLogo} source={require("../assets/spotify-logo.png")} />
            <Text style={styles.spotifyConnectText}> CONNECT WITH SPOTIFY </Text>
        </Pressable>  
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    spotifyConnectButton: {
      backgroundColor: Themes.colors.spotify,
      padding:5,
      borderRadius: 9999999,
      flexDirection: 'row',
      alignItems: "center"
    },
    spotifyConnectText: {
      color: "white",
      margin: 5,
    },
    spotifyLogo: {
      width: 30,
      height: 30,
      margin: 5
      }
  });
  