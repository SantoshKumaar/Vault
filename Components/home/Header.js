import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <Image 
            style= {styles.logo} 
            source ={require('../../assets/v.png')}
            />
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/add-button.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/heart.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>6</Text>
                </View>
                <Image
                    source={require('../../assets/message.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20,
        paddingTop:20,
    },
    iconsContainer:{
        flexDirection:'row',
    },
    logo:{
        width:100,
        height:50,
        resizeMode:'contain',
    },
    icon:{
        alignItems:'center',
        justifyContent:'center',
        width:30,
        height:30,
        marginLeft:10,
        resizeMode:'contain',
       
    },

    unreadBadge:{
        backgroundColor:'red',
        position:'absolute',
        left:20,
        bottom:18,
        width:25,
        height:18,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100,
    },

    unreadBadgeText:{
        color:'white',
        fontWeight:'600',
    }
})
export default Header