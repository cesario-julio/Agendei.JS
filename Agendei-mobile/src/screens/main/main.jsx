import { Text, Image} from  'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icon from '../../constants/icon.js';

import AbaHome from '../abahome/abahome.jsx';
import AbaCalendar from '../abaCalendar/abacalendar.jsx';
import AbaProfile from '../abaProfile/abaProfile.jsx';

const Tab = createBottomTabNavigator();

function Main(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={AbaHome} options={{
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Image source={icon.logo} style={
                            {width: 125, height: 29 }
                        }/>
                    },
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        return <Image source={icon.home} style={
                            {
                                width: 25,
                                height: 25,
                                opacity: focused ? 1 : 0.3
                            }
                        }/>
                    }
                }}/>

                <Tab.Screen name='Calendar' component={AbaCalendar} options={{
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Text>Minhas Reservas</Text> /* EDITAR ESTILO DEPOIS */
                    },
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        return <Image source={icon.calendar} style={
                            {
                                width: 25,
                                height: 25,
                                opacity: focused ? 1 : 0.3
                            }
                        }/>
                    }
                }}/>

                <Tab.Screen name='Profile' component={AbaProfile} options={{
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Text>Meu Perfil</Text> /* EDITAR ESTILO DEPOIS */
                    },
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        return <Image source={icon.profile} style={
                            {
                                width: 25,
                                height: 25,
                                opacity: focused ? 1 : 0.3
                            }
                        }/>
                    }
                }}/>
            </Tab.Navigator>

        </NavigationContainer>

    )
}
export default Main;