import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
 import { Divider } from 'react-native-elements'

 const postFooterIcons = [
    {
        name:'Like',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Heart_icon_red_hollow.svg/1083px-Heart_icon_red_hollow.svg.png',
        likedImageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/1200px-A_perfect_SVG_heart.svg.png'
    },
    {
        name: 'Comment',
        imageUrl:'https://cdn-icons-png.flaticon.com/512/1789/1789313.png'
    },
    {
        name:'Share',
        imageUrl:'https://www.pngfind.com/pngs/m/78-782207_share-download-png-image-blue-share-icon-png.png'
    },
    {
        name:'Save',
        imageUrl:'https://i.pinimg.com/564x/33/f9/90/33f990a7e2cd8cf07dde6004e0999e34.jpg'
    }
 ]
 const Post = ({post}) => {
  return (
    <View style={{marginBottom:30}}>
        <Divider width={10} orientation='vertical'/>
        <PostHeader post = {post}/>
        <PostImage post = {post}/>
        <PostFooter/>
    </View>
  )
}

const PostHeader = ({post}) => (
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5,
        alignItems:'center',
        }}
        >
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={{uri:post.profile_picture}} style={styles.story} />
            <Text style={{color:'white', marginLeft:5, fontWeight:'700'}}>
                {post.user}
            </Text>
        </View>
       <TouchableOpacity>
        <Text style={{color:'white', fontWeight:'900'}}>...</Text>
        </TouchableOpacity>
    </View>
)

const PostFooter = () => (
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}/>
)

const Icon = ({imgStyle, imgUrl})=>(
    <TouchableOpacity>
        <Image style ={imgStyle} source = {{url:imgUrl}}/>
    </TouchableOpacity>
)
const PostImage = ({post})=>(
    <View
    style={{
        width:'100%',
        height:450,
    }}
    >
    <Image source={{uri:post.imageUrl}} 
    style={{height:'100%', resizeMode:'cover'}}
    />
    </View>
)

const styles = StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:58,
        marginLeft:7,
        marginTop:10,
        borderWidth: 1.5,
        borderColor:'white',
    },

    footerIcon:{
        width:'33',
        height:'33',
    },
})

export default Post