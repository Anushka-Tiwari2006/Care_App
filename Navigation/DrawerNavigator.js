import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import TabNavigator from "./TabNavigator";
import DietScreen from "../screens/DietScreen"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator}/>
             <Drawer.Screen name="Diet" component={DietScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator