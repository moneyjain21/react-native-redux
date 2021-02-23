import React, {Component} from 'react';
import {SafeAreaView, Text, View, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class EmployeeData extends Component {
  constructor(props) {
    super(props);
  }

  renderRow = (item, index) => {
    return (
      <View style={styles.row}>
        <Text style={styles.text}>{`Name: ${item.person.name}`}</Text>
        <Text style={styles.text}>{`Gender: ${item.person.gender}`}</Text>
        <Text style={styles.text}>{`Birthdate: ${item.person.birthday}`}</Text>
      </View>
    );
  };

  render() {
    console.log('here>>>>>', this.props.data);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          keyboardShouldPersistTaps="always"
          data={this.props.data}
          ref={(ref) => {
            this.flatListRef = ref;
          }}
          extraData={this.props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => this.renderRow(item, index)}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  row: {
    marginTop: 16,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 1,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
});

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    data: state.EmployeeDataReducer.data,
  };
};
export default connect(mapStateToProps, null)(EmployeeData);
