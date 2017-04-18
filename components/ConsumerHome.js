/**
 * Created by lope1 on 4/16/2017.
 */

import React, { Component } from 'react';
import { Container, Content, Body, Left, Right, Title, Header, Icon, Form, Input, Item, Button, Text, List,
        ListItem, Thumbnail, Card, CardItem} from 'native-base';
import { Image } from 'react-native'
import Drawer from 'react-native-drawer';
import SideBar from './CreatorSideBar';

class ConsumerHome extends Component {

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
                    openDrawerOffset={0.6} // 20% gap on the right side of drawer
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

                    <Content>
                        <Card>
                            <CardItem header>
                                <Thumbnail size={80} source={require('../img/pool2.jpg')} />
                                <Text style={{paddingLeft:15}}>Deadpool</Text>
                            </CardItem>

                            <CardItem>
                                <Body>
                                <Text note>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sapien sit amet neque vulputate ultrices.
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Thumbnail size={80} source={require('../img/pool2.jpg')} />
                                <Text style={{paddingLeft:15}}>Deadpool</Text>
                            </CardItem>

                            <CardItem>
                                <Body>
                                <Text note>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sapien sit amet neque vulputate ultrices.
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Thumbnail size={80} source={require('../img/pool2.jpg')} />
                                <Text style={{paddingLeft:15}}>Deadpool</Text>
                            </CardItem>

                            <CardItem>
                                <Body>
                                <Text note>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sapien sit amet neque vulputate ultrices.
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Drawer>
            </Container>

        )

    }

}

export default ConsumerHome
