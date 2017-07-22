import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { valueChanged } from '../actions';

class SomeComponent extends Component {
    changeValue(value) {
        this.props.valueChanged(value);
    }

    render() {
        const { value } = this.props;

        return (
            <View>
                <Button 
                    title={'Press me!'} 
                    onPress={this.changeValue.bind(this, value)}
                />
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

export default connect(mapStateToProps, { valueChanged })(SomeComponent);
