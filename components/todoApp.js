import {View, Text, TextInput, Button, StyleSheet, FlatList} from "react-native";
import { myTodos } from "../data-sources/myTodos";
export function todoApp(){
    function Todotemplate(tittle,todoType,frequency){
        let boColor;
        let baColor;

        if(todoType=='Reminder'){
             boColor = 'orange';
             baColor = 'oldlace'
        }else if(todoType=='Goal'){
             boColor = 'aqua';
             baColor = 'skyblue'
        }else if(todoType=='EVent'){
             boColor = 'magenta';
             baColor = 'pink'
        }
        return(
            <View style={[styles.todo,
                    {borderColor:boColor,backgroundColor:baColor}]}>
                    <Text style={styles.todoTitle}>{}</Text>
                    <View style={styles.options}>
                        <Text style={styles.optionInfo}>{todoType}</Text>
                        <Text style={styles.optionInfo}>{frequency}</Text>
                    </View>
                </View>
        )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>myTodos</Text>

            <View>style={styles.todosBlock}
                <FlatList
                data={myTodos}
                renderItem={({item})=> Todotemplate(item.title,item.type,item.freq)}
                key={({item})=>item.id}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    tittle:{
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: 'purple',
    },
    todosBlock:{
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: 'skyblue',
        borderRadius: 8,
        marginTop:10,
    },
    todo:{
        padding: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderRadius: 8,
    },
    options:{
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    optionInfo:{
        fontSize:12,
        color:'gray'
    }
})