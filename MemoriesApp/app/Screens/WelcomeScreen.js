import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colours } from '../constants/theme';
import AppLoading from 'expo-app-loading';
import { 
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic
  } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";
import ActionButton from '../Components/ActionButton';
import { Dimensions } from 'react-native';

//WelcomeScreen: The first page that loads when the app
//is newly loaded. Greets the users and sends them to the
//register screen when they click on the 'get started' button.

const WelcomeScreen = () => {
    const nav = useNavigation();

    let [load] = useFonts({
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic
    })
    if(!load) {
        return <AppLoading/>
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.img} source={require('../assets/images/logo-white.png')}/>
                <Text style={styles.logoText}>MemoryLane</Text>
            </View>
            <Image style={styles.welcomeImg} source={require('../assets/images/welcome_img.png')}/>
            <View style={styles.btn}>
                <ActionButton text="Get Started" onPress={() => nav.navigate("Register")}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.primary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 50
    },
    logoText: {
        color: Colours.white,
        fontSize: 40,
        fontFamily: 'Poppins_700Bold',
        textAlign: 'center'
    },
    img: {
        height: 55,
        width: 55
    },
    welcomeImg: {
        height: Dimensions.get('window').width/1.5,
        width: Dimensions.get('window').width/1.5
    },
    btn: {
        top: 100,
        flex: 1,
        width: '100%',
        alignItems: 'center',
    }
})
export default WelcomeScreen;