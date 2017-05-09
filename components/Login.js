import React, { Component, } from 'react';
import { Container, Content, Body, Title, Header, Icon, Form, Input, Item, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Auth from '../utils/Auth';
import style from '../styles/style';

class Login extends Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      debug: 'Login'
    }
  }

  _navigate(){
    this.props.navigator.push({
      name: 'Login', // Matches route.name
    })
  }

  componentWillMount() {
    this.auth = new Auth()
  }

  async elegirHome() {
    const loginResponse = await this.auth.signIn(this.state.email.toString().toLowerCase(), this.state.password.toString());
    console.log("loginResponse: "+JSON.stringify(loginResponse));
    if(loginResponse) {
      const token = await this.auth.getToken();
      const userType = await this.auth.getUserType();
      if (token) {
        if (userType == 'creador') {
          this.props.navigator.replace({id: 'CreatorHome'})
        } else if (userType == 'consumidor') {
          this.props.navigator.replace({id: 'ConsumerHome'})
        }
      }
    }

  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"#9C27B0"}}></Header>
        <Content contentContainerStyle={{flex: 1}} style={{padding: 10}}>
          <Grid>
            <Row size={10}>
              <Col alignItems="center">
                <Icon name='cash' style={{fontSize: 56}}></Icon>
              </Col>
            </Row>
            <Row size={70} style={{paddingTop: 50}}>
              <Col>
                <Form>
                  <Item>
                    <Input
                      placeholder="Email"
                      onChange={(event) => {
                        this.setState({
                          email: event.nativeEvent.text
                        })
                      }
                      }
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
                  </Item>
                </Form>
              </Col>
            </Row>

            <Row size={20}>
              <Col>
                <Button
                  style={{backgroundColor:"#9C27B0"}} block
                  onPress={
                    () => {
                      this.elegirHome();
                      // if(loginResponse == true) {
                      //   this.elegirHome();
                      // }

                    }
                  }
                >
                  <Text style={{color:"#FFFFFF"}}> Login </Text>
                </Button>
              </Col>
            </Row>

            <Row size={20}>
              <Col>
                <Button style={{backgroundColor:"#9C27B0"}} block
                        onPress={
                          () => {
                            this.props.navigator.push({id: 'AnalyticsBase'})
                          }
                        }
                >
                  <Text style={{color:"#FFFFFF"}}> Register </Text>
                </Button>
              </Col>
            </Row>

          </Grid>
        </Content>
      </Container>
    )
  }
}

export default Login;