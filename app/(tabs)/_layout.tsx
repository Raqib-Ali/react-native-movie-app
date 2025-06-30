import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'


const TabIcon = ({ icon, focused, title }) => {
    if (focused) {
        return (
            <ImageBackground source={images.highlight} className='flex-row flex-1 w-full min-w-[112px] min-h-12 justify-center items-center rounded-full'>
                <Image source={icon} className='size-5 me-1 color-secondary' />
                <Text className='text-secondary text-base font-semibold'>{title}</Text>
            </ImageBackground>
        )
    }

    return (
        <View className='size-full min-w-[90px] min-h-12 justify-center items-center rounded-full'>
            <Image source={icon} className='color-secondary size-5'>
            </Image>
        </View>
    )
}

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {

                },
                tabBarStyle: {
                    backgroundColor: '#0f0D23',
                    borderRadius: 50,
                    marginHorizontal: 16,
                    marginBottom: 36,
                    height: 10,
                    position: 'absolute',
                    borderWidth: 1,
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 40
                }
            }}


        >

            <Tabs.Screen
                name='index'
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.home} focused={focused} title={'Home'} />
                    )
                }}
            />

            <Tabs.Screen
                name='search'
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.search} focused={focused} title={'Search'} />
                    )
                }}
            />

            <Tabs.Screen
                name='saved'
                options={{
                    title: "Saved",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.save} focused={focused} title={'Saved'} />
                    )
                }}
            />

            <Tabs.Screen
                name='profile'
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.person} focused={focused} title={'Profile'} />
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout

const styles = StyleSheet.create({})