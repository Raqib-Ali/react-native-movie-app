import { images } from '@/constants/images'
import React from 'react'
import { Image, Text, View } from 'react-native'

const search = () => {
    return (
        <View className='flex-1 bg-primary h-full'>
            <Image source={images.bg} className='absolute z-0 h-full w-full' resizeMode='cover' />
            <Text>search</Text>
        </View>
    )
}

export default search
