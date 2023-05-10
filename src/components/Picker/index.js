import react from "react";
import Picker from "react-native-picker-select";

export default function PickerSelect(props){

    const placeholder = {
        label: 'Selecione uma moeda...',
        value: null,
        color: '#000'
    }

    return(
        <Picker
        placeholder={placeholder}
items={props.moedas}
onValueChange={(valor) => props.onChange(valor)}
style={{
    inputIOS:{
        fontSize:20,
        color: '#000'
    },
    inputAndroid:{
        fontSize: 20,
        color: '#000'
    }
}}      
/>
    )
}