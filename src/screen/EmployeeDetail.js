import React, {Component} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class EmployeeDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainTextStyle}>Show Employee Details </Text>
        <View style={styles.textViewStyle}>
          <Text style={styles.textStyle}>Name: </Text>
          <Text style={styles.textStyle}>
            {this.props.employeeDetails.name}
          </Text>
        </View>
        <View style={styles.textViewStyle}>
          <Text style={styles.textStyle}>School Name: </Text>
          <Text style={styles.textStyle}>
            {this.props.employeeDetails.schoolName}
          </Text>
        </View>
        <View style={styles.textViewStyle}>
          <Text style={styles.textStyle}>Company Name: </Text>
          <Text style={styles.textStyle}>
            {this.props.employeeDetails.companyName}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textViewStyle: {
    flexDirection: 'row',
    paddingBottom: 20,
    marginHorizontal: 20,
  },
  textStyle: {
    marginTop: 10,
    fontSize: 15,
  },
  mainTextStyle: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
});

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    employeeDetails: state.EmployeeDetailReducer.employeeDetails,
  };
};
export default connect(mapStateToProps, null)(EmployeeDetail);
