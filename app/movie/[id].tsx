import { images } from '@/constants/images'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Details = () => {
    const { id } = useLocalSearchParams()
    return (
        <View className='bg-primary h-full'>
            <Image source={images.bg} className='absolute z-0 h-full w-full' resizeMode="cover" />

        </View>
    )
}

export default Details

const styles = StyleSheet.create({})