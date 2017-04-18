/**
 * Created by yolas on 4/17/2017.
 */
import React, { Component, } from 'react';
import { Container, Content, Body, Title, Header, Icon, Form, Input, Item, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Auth from '../utils/Auth';
import RegisterPicker from './RegisterPicker'

class Register extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      userType: false
    }
  }

  componentWillMount() {
    this.auth = new Auth()
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"#b9f6ca"}}></Header>
        <Content contentContainerStyle={{flex: 1}} style={{padding: 10}}>
          <Grid>
            <Row size={80} style={{paddingTop: 50}}>
              <Col>
                <Form>
                  <Item>
                    <Input
                      placeholder="Email"
                      onChange={(event) => {
                        this.setState({email: event.nativeEvent.text
                        })}}
                    />
                  </Item>
                  <Item>
                    <Input
                      placeholder="Username"
                      onChange={(event) => {
                        this.setState({username: event.nativeEvent.text
                        })}}
                    />
                  </Item>
                  <Item>
                    <Input
                      placeholder="Password"
                      secureTextEntry={true}
                      ref = "password"
                      onChange={(event) => {
                        this.setState({password: event.nativeEvent.text})
                      }
                      }
                    />
                    <Item>
                      <Input
                        placeholder="Confirm Password"
                        onChange={(event) => {
                          this.setState({confirmPassword: event.nativeEvent.text
                          })}}
                      />
                    </Item>
                    <Item>
                      <RegisterPicker/>
                    </Item>
                  </Item>
                </Form>
              </Col>
            </Row>

            <Row size={20}>
              <Col>
                <Button
                  style={{backgroundColor:"#b9f6ca"}} block
                  onPress={
                    () => {this.auth.signUp(this.state.email, this.state.username, this.state.password,
                      this.state.confirmPassword, this.state.userType).
                    then((res) => {
                      this.props.loggedIn = true;
                      this.props.userType = res.user.userType;
                    })
                    }
                  }
                >
                  <Text style={{color:"#ffffff"}}> Go! </Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    )
  }
}

export default Register