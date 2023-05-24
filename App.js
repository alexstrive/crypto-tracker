import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CoinsScreenLeft from './screens/CoinsScreen/CoinScreenLeft';
import CoinsScreenRight from './screens/CoinsScreen/CoinScreenRight';
import CoinsScreen from './screens/CoinsScreen';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="coins">
          <Stack.Screen
            name="coins"
            component={CoinsScreen}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#fff',
              },
              headerLeft: (props) => <CoinsScreenLeft {...props} />,
              headerRight: (props) => <CoinsScreenRight {...props} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
