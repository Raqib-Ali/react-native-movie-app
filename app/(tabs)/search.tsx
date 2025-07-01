import MovieCard from '@/components/movieCard'
import SearchBar from '@/components/searchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import fetchMovie from '@/services/api'
import useFetch from '@/services/useFetch'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'



const search = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const { data, loading, error, refetch, reset
    } = useFetch(() => fetchMovie({
        query: searchQuery
    }), false)

    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            if (searchQuery.trim()) {
                await refetch()
            } else {
                reset();
            }
        }, 500)

        return () => clearTimeout(timeoutId);
    }, [searchQuery])

    return (
        <View className='flex-1 bg-primary h-full'>
            <Image source={images.bg} className='absolute z-0 h-full w-full' resizeMode='cover' />

            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <MovieCard {...item} />
                )}
                className='px-6'
                keyExtractor={(item) => item.id}
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: "center",
                    gap: 16,
                    marginVertical: 16
                }}
                ListHeaderComponent={
                    <>
                        <View className='mt-10 items-center'>
                            <Image source={icons.logo} className='w-12' />
                        </View>

                        <View>
                            <SearchBar placeholder='Search for movies...' value={searchQuery} onChangeText={(text: string) => setSearchQuery(text)} />

                            {
                                loading && <ActivityIndicator
                                    size={'large'}
                                    color={"white"}
                                />
                            }

                            {
                                error && (
                                    <Text className='text-red-500'>
                                        Error: {error.message}
                                    </Text>
                                )
                            }

                            {
                                !error && !loading && searchQuery.trim() && data?.length > 0 && (
                                    <Text className='text-white'>
                                        Results for the "{searchQuery}"
                                    </Text>
                                )
                            }

                            {
                                !error && !loading && !searchQuery.trim() && (
                                    <Text className='text-white self-center mt-10'>
                                        Search a movie
                                    </Text>
                                )
                            }

                        </View>
                    </>
                }

            >

            </FlatList>
        </View>
    )
}

export default search
