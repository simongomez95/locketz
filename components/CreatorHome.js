import React, { Component } from 'react';
import { Container, Content, Body, Left, Right, Title, Header, Icon, Form, Input, Item, Button, Text } from 'native-base';
import { Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';

class CreatorHome extends Component {

    static propTypes = {}
    static defaultProps = {}

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <Container>
                <Header style={{backgroundColor:"#b9f6ca"}}>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" size={20} color='white' />
                        </Button>
                    </Left>
                    <Body alignItems = "center"><Title>Home</Title></Body>
                    <Right/>
                </Header>

                <Content style={{padding: 10}}>
                    <Grid>
                        <Row style={{height:300}}>
                            <Col alignItems ="center">
                                <Image
                                    style={{width: 256, height: 256}}
                                    source={require('../img/pool1.png')}
                                />
                            </Col>
                        </Row>

                        <Row style={{height:50}}>
                            <Col style={{paddingLeft: 30}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>420 Followers</Text>
                            </Col>
                        </Row>
                        <Row style={{height:50}}>
                            <Grid>
                                <Row style={{height:50, alignItems:"center"}}>
                                    <Col style={{alignItems:"center"}}>
                                        <Icon name="flask" size={100} color='green'/>
                                    </Col>
                                    <Col style={{alignItems:"center"}}>
                                        <Icon name="flame" size={100} color='green'/>
                                    </Col>
                                </Row>
                            </Grid>
                        </Row>


                    </Grid>
                </Content>
            </Container>
        )
    }
}


export default CreatorHome
