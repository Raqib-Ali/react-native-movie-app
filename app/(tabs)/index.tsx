import MovieCard from '@/components/movieCard'
import SearchBar from '@/components/searchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import fetchMovie from '@/services/api'
import useFetch from '@/services/useFetch'
import { useRouter } from 'expo-router'
import React from 'react'
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from 'react-native'


const index = () => {
    const router = useRouter()

    const { data, loading, error
    } = useFetch(() => fetchMovie({
        query: ""
    }))

    return (
        <View className='bg-primary h-full '>
            <Image source={images.bg} className='h-full w-full absolute z-0' />
            <ScrollView className='flex-1 px-5' contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}>
                <Image source={icons.logo} className='w-12 h-10 mx-auto mt-10'></Image>
                <SearchBar onPress={() => router.push('/search')} placeholder='Search a movie' />

                {
                    loading ? <ActivityIndicator
                        size={'large'}
                        className='mt-10 mb-10 self-center'
                        color={'white'}
                    /> : error ? error?.message :

                        <>

                            <Text className='font-bold text-lg text-slate-500'>Latest Movie</Text>

                            <FlatList
                                data={data}
                                renderItem={({ item }) => (
                                    <MovieCard {...item} />
                                )}
                                scrollEnabled={false}
                                keyExtractor={(item) => item.id}
                                numColumns={3}
                                columnWrapperStyle={{
                                    justifyContent: 'center',
                                    gap: 10,
                                    padding: 5,
                                    marginVertical: 14
                                }}

                            />
                        </>
                }
            </ScrollView>
        </View >
    )
}

export default index;