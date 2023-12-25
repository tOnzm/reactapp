import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(prop) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{prop.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        width: '100%',
        paddingTop: 38,
        backgroundColor: '#5e6745',
    },
    title: {
        textAlign: 'center',
        color: '#aeba89',
        fontSize: 20,
        fontWeight: 'bold'
    }
})