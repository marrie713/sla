import { View, StatusBar, Text} from "react-native"
import { StyleAluguel } from "../Aluguel/style"

export default function Comprovante(){
    return(
        <View style={StyleAluguel.root}>
            <StatusBar/>
            <View style={StyleAluguel.card}>
                <Text> GET </Text>

            
            </View>
        </View>
    )
}