import React from 'react'
import { StyleSheet, View, Text, } from 'react-native'

export function Detail ( {route, navigation} ) {
    const title = route.params.title
    const name = route.params.name
    const body = route.params.body
    return (
        <View style={styles.container}>
            <Text style={styles.user}>{name}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text>{body}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    user:{
        fontSize:32,
        borderBottomColor:'#eee',
        borderBottomWidth:1
    },
    title:{
        fontSize: 20,
        borderBottomColor:'#eee',
        borderBottomWidth:1
    },
})