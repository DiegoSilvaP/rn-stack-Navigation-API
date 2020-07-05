import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { ListItem } from "../components/ListItem";


export function Users ({ navigation }) {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <View style={styles.container}>
            { loading ? <Text>Cargando...</Text>:
            <FlatList 
            style={styles.list}
            data={users}
            keyExtractor={x => String(x.id)}
            renderItem={({item}) => <ListItem onPress={()=> navigation.navigate('Posts', { user_id : item.id, name: item.name })} title={item.name} />}
            />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    list: {
        alignSelf: 'stretch'
    }
})