import { Text, View, StyleSheet, Alert } from 'react-native';
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
import { Colours } from '../constants/theme';
import InputField from '../Components/InputField';
import ActionButton from '../Components/ActionButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from "@react-navigation/native";
import { Users } from '../constants/users';

const loginSchema = Yup.object().shape(
    {
        username: Yup.string().required().min(3).max(12).label('Username'),
        password: Yup.string().required().min(5).max(12).label('Password')
    }
)

//LoginScreen: displays a form where the input is validated using Yup.
//Checks if user credentials is correct by comparing information at the 
//users.js file. Redirects the user to the home screen if successful.

const LoginScreen = () => {

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

    const verifyUser = (user) => {
        const existingUser = Users.filter((u) => {
            return u.username == user.username && u.password == user.password
        }
        )

        if (existingUser.length > 0) {
            nav.navigate("Home", { user: existingUser[0] })
        }
        else {
            Alert.alert("Invalid Credential", "Please check input!")
        }
    }

    return (
        <View style={styles.background}>
            <View style={styles.emptyBox}/>
            <View style={styles.container}>
                <Text style={styles.header}>Login</Text>
            </View>
                <Formik
                    initialValues={{username:'', password:''}}
                    onSubmit = {(u)=>verifyUser(u)}
                    validationSchema={loginSchema} 
                >
                {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <>
                        <View style={styles.form}>
                            <InputField icon="md-person"
                                        placeholder="username"
                                        placeholderTextColor="#c9c9c9" 
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        onChangeText = {handleChange("username")}
                                        onBlur={()=>setFieldTouched("username")}
                            />
                            {touched.username && <Text style={styles.errorText}>{errors.username}</Text>}
                            <InputField icon="md-key-sharp"
                                        placeholder="password"
                                        placeholderTextColor="#c9c9c9" 
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry
                                        textContentType="password"
                                        onChangeText = {handleChange("password")}
                                        onBlur={()=>setFieldTouched("password")}
                            />
                            {touched.password && <Text style={styles.errorText}>{errors.password}</Text>}
                        </View>
                        <View style={styles.login}>
                            <ActionButton text="Sign In" onPress={handleSubmit}/>
                            <Text style={styles.loginTxt}>Don't have an account?  
                                <Text style={{fontFamily: "Poppins_700Bold"}} 
                                      onPress={() => nav.navigate("Register")}>
                                    Sign Up
                                </Text>
                            </Text>
                        </View>
                    </>
                )}
                </Formik>
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colours.primary,
    },
    emptyBox: {
        flex: 1
    },
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignContent: 'center'
    },
    header: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 40,
        color: Colours.white,
        textAlign: 'center'
    },
    form: {
        flex: 0.8,
        padding: 10
    },
    loginTxt: {
        margin: 20,
        color: Colours.white,
        textAlign: 'center',
        fontFamily: 'Poppins_400Regular'
    },
    login: {
        flex: 1,
        margin: 20
    },
    errorText: {
        color: Colours.error,
        fontFamily: 'Poppins_300Light',
        fontSize: 12,
        marginLeft: 20
    }
})

export default LoginScreen
