import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Navbar() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Portfolio Values</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f6f7fa',
        height: 50,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
