import { StyleSheet , View, Text , Pressable, Image} from "react-native";
import { Themes } from "../assets/Themes";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

    
export default function Song ({item}) {
const navigation = useNavigation()

    return(
      <View style={styles.listContainer}> 
        {/* Play button - navigate to song preview screen*/}
        <View style={styles.playIcon}>
        <Pressable onPress= {() => {navigation.navigate('Preview', {preview_url: item.preview_url,});}}>
        <Ionicons style={styles.playIcon} size={32} color="green" name="play-circle"/>
        </Pressable>
        </View>

        {/* It's not nice to have many pressables like this but my layout got messed up if I did it over everything
        and I decided today is not the day to fix it */}
        {/* Album Image */}
        <Pressable onPress= {() => {navigation.navigate('Detail', {external_url: item.external_urls.spotify,});}}>
        <Image style={styles.albumPic} source={{ uri: item.album.images[0].url }} />
        </Pressable>
        <View style={styles.nameContainer}> 
          <Pressable onPress= {() => {navigation.navigate('Detail', {external_url: item.external_urls.spotify,});}}>
          {/* Song name */}
          <Text style={styles.songnameText} numberOfLines={1}>{item.name}</Text>
          {/* Artist name */}
          <Text style={styles.artistnameText} numberOfLines={1}>{item.artists[0].name}</Text>
          </Pressable>
        </View>
        <Pressable onPress= {() => {navigation.navigate('Detail', {external_url: item.external_urls.spotify,});}}>
        {/* Album name */}
        <Text style={styles.albumnameText} numberOfLines={1}>{item.album.name}</Text>
        </Pressable>
        {/* Duration */}
        <Pressable onPress= {() => {navigation.navigate('Detail', {addrexternal_urless: item.external_urls.spotify,});}}>
        <Text style={styles.durationText} numberOfLines={1}>{millisToMinutesAndSeconds(item.duration_ms)}</Text>
        </Pressable>
        </View>
    )
}



const styles = StyleSheet.create({
  
    listContainer: {
        backgroundColor: Themes.colors.background,
        flexDirection:'row'
      },
      playIcon: {
        flexDirection:'column',
        justifyContent: 'center'
      },
      albumPic: {
        height: 55,
        width: 55,
        margin: 8
    },
      indexText: {
        color: "gray",
        margin: 5,
        width: 25
      },
      pressContainer: {
        backgroundColor: Themes.colors.background,
        flexDirection:'row',
        width:400
      },
      nameContainer: {
        backgroundColor: Themes.colors.background,
        flexDirection:'column',
        width: 140
      },
      songnameText: {
        color: "white",
        margin: 5,
      },
      artistnameText: {
        color: "gray",
        margin: 5,
      },
      albumnameText: {
        color: "white",
        margin: 5,
        width: 70
      },

    durationText: {
        color: "white",
        margin: 5,
        width: 30
      },
  });
  
