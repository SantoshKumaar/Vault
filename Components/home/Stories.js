import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const Stories = () => {
  return (
    <View style={{marginBottom:13}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {USERS.map((story, index) => (
                <View key={index} style={{alignItems:'center'}} >
                    <Image source={{uri:story.Image}}
                    style={styles.story}/>
                    <Text style={{color:'white'}} > {
                    story.user.length> 11 ? story.user.slice(0, 10).toLowerCase()+'...' :
                     story.user.toLowerCase()}</Text>
                </View>
            ))}
        </ScrollView>
 
    </View>
  )
}

const styles = StyleSheet.create({
    story:{
        width:60,
        height:60,
        borderRadius:58,
        marginLeft:15,
        marginTop:10,
        borderWidth: 3,
        borderColor:'white',
    },
})

export default Stories