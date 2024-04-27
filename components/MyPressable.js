import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";


export default function MyPressable({text, children, page}){

    const {navigate} = useNavigation();

    return (
        <Pressable onPress={()=>{
            navigate(page, { text });
        }}>
            {children}
        </Pressable>
    )
}