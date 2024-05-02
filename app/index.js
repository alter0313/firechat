import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

const StartPage = () => {
    const{loading} = useContext(AuthContext)

  return (
    <View className='flex-1 justify-center'>
    {loading && <ActivityIndicator size="large" color={"gray"}/>}
    </View>
  )
}

export default StartPage