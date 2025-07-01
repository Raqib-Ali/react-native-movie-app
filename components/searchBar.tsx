import { icons } from '@/constants/icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
    onPress?: () => void;
    placeholder: string;
    onChangeText: (text: string) => void,
    value: string
}

const SearchBar = ({ onPress, placeholder, onChangeText, value }: Props) => {
    const router = useRouter()
    return (
        <View
            className='flex-row w-full items-center bg-slate-800 rounded-full px-5 my-5'>
            <Image source={icons.search} className='size-5' />
            <TextInput
                placeholder={placeholder}
                className='ml-3 w-full'
                placeholderTextColor={'#adb5db'}
                onPress={onPress}
                value={value}
                onChangeText={onChangeText}
            />
        </View>

    )
}

export default SearchBar
