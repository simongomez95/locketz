import React, { Component } from 'react';
import { Container, Content, Body, Left, Right, Title, Header, Icon, Form, Input, Item, Button, Text
        ,} from 'native-base';
import { Image, View } from 'react-native';
import Drawer from 'react-native-drawer';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SideBar from './CreatorSideBar';

class CreatorHome extends Component {

    static propTypes = {}
    static defaultProps = {}

    constructor(props) {
        super(props)
        this.state = {}
    }

    closeDrawer = () => {
        this._drawer.close()
    };
    openDrawer = () => {
        this._drawer.open()
    };

    render() {

        return(

            <Container>
                <Drawer
                    type="overlay"
                    ref={(ref) => this._drawer = ref}
                    content={<SideBar/>}
                    tapToClose={true}
                    openDrawerOffset={0.2} // 20% gap on the right side of drawer
                    panCloseMask={0.2}
                    closedDrawerOffset={-3}
                    tweenHandler={(ratio) => ({
                main: { opacity:(2-ratio)/2 }
                })}>
                    <Header style={{backgroundColor:"#b9f6ca"}}>
                        <Left>
                            <Button transparent
                                    onPress={() => {this.openDrawer()}}>
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
                </Drawer>
            </Container>




        )
    }
}


export default CreatorHome
