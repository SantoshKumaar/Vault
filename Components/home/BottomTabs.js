import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name : 'Home',
        active : 'https://cdn-icons-png.flaticon.com/512/3405/3405791.png',
        inactive : 'https://cdn-icons-png.flaticon.com/512/3416/3416082.png',    
    },
    {
        name : 'Search',
        active : 'https://cdn-icons-png.flaticon.com/512/1076/1076744.png',
        inactive : 'https://cdn-icons-png.flaticon.com/512/1076/1076336.png',    
    },
    {
        name : 'Profile',
        active : 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        inactive : 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',    
    },

]
const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => {
        <TouchableOpacity onPress={()=> setActiveTab(icon.name)}>
            <Image 
            source = {{uri: activeTab === icon.name ? icon.active : icon.inactive}} 
            style={[styles.icon, icon.name === 'Profile' ? styles.profilePic(): null,
            activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab): null,
            ]}
            />
        </TouchableOpacity>
    }
    return (
    <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical'/>
        <View style={styles.container}>
            {icons.map((icon,index)=>(
                <Icon key={index} icon={icon}/>
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        position :'absolute',
        width: '100%',
        bottom: '3%',
        zindex: 999,
        backgroundColor: '#000',
    },

    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        height:50,
        padding:10,
    },
    icon:{
        width:30,
        height:30,
    },

    profilePic: (activeTab = '') => ({
        borderRadius:50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor:'#fff',
    }),
})

export default BottomTabs
