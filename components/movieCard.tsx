import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const MovieCard = ({ id, title, poster_path, vote_average, release_date }: Movie) => {
    return (
        <Link href={`/movie/${id}`} className='w-[32%]' asChild>
            <TouchableOpacity>
                <Image
                    source={{
                        uri: poster_path ? `https://media.themoviedb.org/t/p/w500/${poster_path}` : ""
                    }}

                    className='w-full h-44 rounded-md'
                />

                <Text className='text-sm text-white' numberOfLines={1}>{title}</Text>

                <View className='flex-row items-center'>
                    <Image source={icons.star} className='size-4' />
                    <Text className='text-white text-sm ms-2'>{Math.round(vote_average / 2)}</Text>
                </View>

                <View className='flex-row justify-between items-center'>
                    <Text className='text-light-200 text-sm'>{release_date.split('-')[0]}</Text>
                    <Text className='text-light-200 text-sm'>Movies</Text>
                </View>
            </TouchableOpacity>
        </Link >
    )
}

export default MovieCard;