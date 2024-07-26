import React from "react";
import { Text } from "react-native";
import { Link } from "expo-router";

const Register = () => {
    return(
        <Link href={'/Login/Login'}>
            <Text>Testando Rotas</Text>
        </Link>
    )
}

export default Register;