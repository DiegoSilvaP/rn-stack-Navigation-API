import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { ListItem } from "../components/ListItem";

export function Posts ({ route, navigation }) {
    const userId = route.params.user_id
    const name = route.params.name
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [])


    return (
        <View style={styles.container}>
            { loading ? <Text>Cargando...</Text>:
            <FlatList 
            style={styles.list}
            data={posts.filter(x => x.userId === userId)}
            keyExtractor={x => String(x.id)}
            renderItem={({item}) => <ListItem onPress={()=> navigation.navigate('Detail', { name:name, title : item.title, body: item.body })} title={item.title} />}
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