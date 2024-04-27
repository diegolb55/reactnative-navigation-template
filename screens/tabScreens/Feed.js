import { Text, View, StyleSheet, ScrollView, Pressable, Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyPressable from "../../components/MyPressable";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";


export default function Feed() {

    const navigation = useNavigation();

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable
                    onPress={() => navigation.openDrawer()}
                >
                    <Image 
                        style={{width: 30, height: 30}}
                        source={require("../../assets/favicon.png")}
                    />
                </Pressable>
            ),
            headerRight:() => <Button title="idk"  onPress={() => navigation.openDrawer()}/>
        })
    })


    const [num, setNum] = useState([1, 2, 3]);
    
    const displayPressables = () => {
        return num.map((p, index) => (
            <MyPressable key={index} text={`Feed${p}`} page={"Details"}>
                <View style={styles.world}>
                    <Text style={{textAlign:"center"}}>World {p}</Text>
                </View>
            </MyPressable>
        ))
    }
    return (
        <ScrollView>
            <View>

                {
                    displayPressables()
                }
        
            </View>
            <MyPressable  text={"red"} page={"Deeper Details"}>
                <View style={styles.world}>
                    <Text style={{textAlign:"center"}}>World </Text>
                </View>
            </MyPressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    world:{
        backgroundColor:"lightblue",
        padding: 40,
        borderRadius:20,
        width:"50%",
        alignSelf:"center",
        marginVertical:10,
    },
});