import React, { useState, useEffect } from 'react';
import { Text, Image, StyleSheet, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Keyboard, Animated, Platform } from 'react-native';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageOpacity] = useState(new Animated.Value(1));
    const [formPosition] = useState(new Animated.Value(0));

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleKeyboardDidShow = () => {
        Animated.parallel([
            Animated.timing(imageOpacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(formPosition, {
                toValue: -150,  // Ajuste este valor conforme necessário
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const handleKeyboardDidHide = () => {
        Animated.parallel([
            Animated.timing(imageOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(formPosition, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <Animated.View style={[styles.view, { transform: [{ translateY: formPosition }] }]}>
                <Animated.Image source={require('../../assets/images/solana.png')} style={[styles.image, { opacity: imageOpacity }]} />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor="#808080"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor="#808080"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    autoCapitalize="none"
                />
                <Text>Forget your password?</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    image: {
        height: 150,
        width: 150,
        margin: '15%'
    },
    input: {
        width: '60%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 10,
        marginBottom: '5%'
    },
    button: {
        width: '60%',
        padding: 15,
        backgroundColor: '#701198',
        marginTop: '5%',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        color: '#ffffff'
    }
});