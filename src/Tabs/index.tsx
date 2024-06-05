import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Principal from './Principal';
import Barreiras from './Barreiras';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Perfil from "./Perfil";
import SaibaMais from "./SaibaMais";

const Tab = createBottomTabNavigator();
const screenOptions={
    tabBarStyle:{
        backgroundColor:"#002851"
    },
    tabBarActiveTintColor:"#339cff",
    tabBarInactiveTintColor:"#FFF"
}

const tabs=[
    {
        name:'Principal',
        component:Principal,
        icon:'home'
    },
    {
        name:'Barreiras',
        component:Barreiras,
        icon:'list'
    },
    {
        name:'Saiba Mais',
        component:SaibaMais,
        icon:'search'
    },
    {
        name:'Perfil',
        component:Perfil,
        icon:'person'
    },
]

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            )
          }}
        />
      ))
      }
    </Tab.Navigator>
  )
}