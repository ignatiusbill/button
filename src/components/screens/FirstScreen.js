import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { valueChanged } from '../../actions';

class FirstScreen extends Component {
    changeValue(value) {
        this.props.valueChanged(value);
    }

    render() {
        const { value } = this.props;
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Button 
                    title={'Press me!'} 
                    onPress={this.changeValue.bind(this, value)}
                />
                <Text>{value}</Text>
                <Button
                    title={'Go to SecondScreen'}
                    onPress={() => navigate('Second')}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state.button.value
    };
};

export default connect(mapStateToProps, { valueChanged })(FirstScreen);
export { FirstScreen };
