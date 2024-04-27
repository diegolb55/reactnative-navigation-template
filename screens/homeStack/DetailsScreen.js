import { Button, SafeAreaView, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";

export default function Details(){

    const navigation = useNavigation();
    const route = useRoute();
    const {
        params
    } = route;

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: params.text
        })
    }, [])

    return (
        <SafeAreaView>
            <Text> details from {params.text}</Text>
            <Button title="Go Back" onPress={()=> navigation.goBack()}/>
        </SafeAreaView>
    )
}