import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EmployeeForm from '../screen/EmployeeForm';
import EmployeeDetail from '../screen/EmployeeDetail';
import EmployeeData from '../screen/EmployeeData';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EmployeeForm"
        component={EmployeeForm}
        options={{
          headerTitle: 'EmployeeForm',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'grey',
            elevation: 0,
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name="EmployeeDetail"
        component={EmployeeDetail}
        options={{
          headerTitle: 'EmployeeDetail',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'grey',
            elevation: 0,
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name="EmployeeData"
        component={EmployeeData}
        options={{
          headerTitle: 'EmployeeData',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'grey',
            elevation: 0,
            shadowColor: 'transparent',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
