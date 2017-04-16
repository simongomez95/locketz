import React, { Component, } from 'react';
import { Container, Content, Body, Title, Header, Icon, Form, Input, Item, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class Login extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"#b9f6ca"}}></Header>
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
                  <Input placeholder="Usernaeeeeee " />
                </Item>
                <Item>
                  <Input placeholder="Password" secureTextEntry={true}/>
                </Item>
              </Form>
              </Col>
            </Row>

            <Row size={20}>
              <Col>
                <Button style={{backgroundColor:"#b9f6ca"}} block>
                  <Text style={{color:"#ffffff"}}> Login </Text>
                </Button>
              </Col>
            </Row>

            <Row size={20}>
              <Col>
                <Button style={{backgroundColor:"#b9f6ca"}} block>
                  <Text style={{color:"#ffffff"}}> Register </Text>
                </Button>
              </Col>
            </Row>

          </Grid>
        </Content>
      </Container>
    )
  }
}

export default Login