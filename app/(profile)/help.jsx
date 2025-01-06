import {View, Text, StyleSheet, Pressable} from 'react-native'
import { Link } from 'expo-router'
import {useState} from "react"

const app= () => {
  const [count, setCount] = useState(0)
  return(
    <View style={style.container}>
      <Text style={style.text}>Help</Text>
      <Link href="/explore" style={style.text} asChild>
        </Link>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
      color: "white",
      flex: 1,
      flexDirection: "column",
      display: 'flex',
      alignItems: "center",
      justifyContent: "center"
  },
  text:{
    color: 'white',
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  }
})

export default app