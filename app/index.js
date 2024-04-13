import React, { useState } from 'react';
import {Text, View, TextInput, Button } from 'react-native';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        
    };

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-5xl">CompuWiki</Text>
            <Text className="text-2xl">Powered by Chiki Team</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
}
