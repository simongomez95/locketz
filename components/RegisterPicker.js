/**
 * Created by yolas on 4/17/2017.
 */
import React, { Component } from 'react';
import { Container, Content, Picker } from 'native-base';

const Item = Picker.Item;
class RegisterPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: 'false',
      results: {
        items: []
      }
    }
  }
  onValueChange (value: string) {
    this.props.setUserType(value)
  }
  render() {
    return (
      <Container>
        <Content>
          <Picker
            iosHeader="user Type"
            mode="dropdown"
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}>
            <Item label="Consumer" value="false" />
            <Item label="Content Creator" value="true" />
          </Picker>
        </Content>
      </Container>
    );
  }
}

export default RegisterPicker