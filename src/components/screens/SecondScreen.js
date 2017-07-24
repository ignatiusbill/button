import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class SecondScreen extends Component {
    render() {
        const { value } = this.props;
        console.log("SecondScreen's value: ", value);

        return (
            <View>
                <Text>{value}</Text>
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        value: state.button.value
    };
};

export default connect(mapStateToProps)(SecondScreen);
