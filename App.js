import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

export default function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://192.168.8.127:9000/users').then(
            response => response.json()
        ).then(
            data => console.log(data)
        ).catch(
            error => console.log(error)
        )
    }, []);

    return (
        <View>
            <Text>OK, Computer</Text>
        </View>
    )
}