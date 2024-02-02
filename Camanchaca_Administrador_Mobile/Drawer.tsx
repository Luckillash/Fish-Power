import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      {/* {/* <Drawer.Screen name="Feed" component={Feed} /> */}
      <Drawer.Screen name="Article" component={Home} /> 
    </Drawer.Navigator>
  );
}