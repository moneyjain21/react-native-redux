import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {
  SaveEmployeeDetails,
  callWebService,
} from '../action/SaveEmployeeDetailAction';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      schoolName: '',
      companyName: '',
    };
  }

  render = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainView}>
          <Text style={styles.mainTextStyle}>Submit Employee Details</Text>
          <Text style={styles.textStyle}>Enter Your Name</Text>
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholderTextColor="#cccccc"
            placeholder="Enter Your Name"
            onChangeText={(name) => {
              this.setState({name: name}, () => {});
            }}
          />
          <Text style={styles.textStyle}>Enter Your School Name</Text>
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholderTextColor="#cccccc"
            placeholder="Enter Your School Name"
            onChangeText={(schoolName) => {
              this.setState({schoolName: schoolName}, () => {});
            }}
          />
          <Text style={styles.textStyle}>Enter Your Company Name</Text>
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholderTextColor="#cccccc"
            placeholder="Enter Your Company Name"
            onChangeText={(companyName) => {
              this.setState({companyName: companyName}, () => {});
            }}
          />
          <TouchableOpacity
            underlayColor="transparent"
            style={styles.buttonStyle}
            onPress={() => {
              let employeeDetails = {};
              employeeDetails.name = this.state.name;
              employeeDetails.schoolName = this.state.schoolName;
              employeeDetails.companyName = this.state.companyName;
              this.props.saveEmpDetail(employeeDetails);
              this.props.navigation.navigate('EmployeeDetail');
            }}>
            <Text style={styles.buttonTextStyle}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            underlayColor="transparent"
            style={styles.buttonStyle}
            onPress={() => {
              this.props.callService();
              this.props.navigation.navigate('EmployeeData');
            }}>
            <Text style={styles.buttonTextStyle}>Ftech Data</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveEmpDetail: (employeDetails) =>
      dispatch(SaveEmployeeDetails(employeDetails)),
    callService: () => dispatch(callWebService()),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainView: {
    margin: 10,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
  },
  textStyle: {
    marginTop: 10,
    fontSize: 15,
  },
  mainTextStyle: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 20,
  },
  buttonStyle: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginTop: 20,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default connect(null, mapDispatchToProps)(EmployeeForm);
