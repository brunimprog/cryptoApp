import React from 'react';
import { } from 'react-native';

import Login from './Login/Login';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
        <Login/>
    </SafeAreaView>
  );
}

