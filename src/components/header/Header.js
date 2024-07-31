import { Image, Text, View } from 'react-native'
import React from 'react'
import HeaderStyle from './HeaderStyle'

const Header = () => {
  return (
    <View style={HeaderStyle.headerContainer}>
      <Image source={require("../../assets/toDo-icon.png")} style={HeaderStyle.logo} />
      <Text style={HeaderStyle.headerHeading}>Todo List</Text>
    </View>
  )
}

export default Header

