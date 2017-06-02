/**
 * Created by lope1 on 5/31/2017.
 */
import React, { Component } from 'react';
import { Container, Content, Body, Left, Right, Title, Header, Icon, Form, Input, Item, Button, Text
    , List, ListItem, Switch,Footer} from 'native-base';
import Drawer from 'react-native-drawer';
import { Image } from 'react-native';
import SideBar from './ConsumerSideBar';

class SettingsB extends Component {

    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state={}

    }

    closeDrawer = () => {
        this._drawer.close()
    };
    openDrawer = () => {
        this._drawer.open()
    };

    _navigate(){
        this.props.navigator.push({
            name: 'Settings', // Matches route.name
        })
    }

    render(){
        return(
            <Container>
                <Drawer
                    type="overlay"
                    ref={(ref) => this._drawer = ref}
                    content={<SideBar navigator={this.props.navigator}/>}
                    tapToClose={true}
                    openDrawerOffset={0.58} // 60% gap on the right side of drawer
                    panCloseMask={0.2}
                    closedDrawerOffset={-3}
                    tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                })}>
                    <Header style={{backgroundColor:"#9C27B0"}}>
                        <Left>
                            <Button transparent
                                    onPress={() => {this.openDrawer()}}>
                                <Icon name="menu"  style={{color:'#ffffff'}} />
                            </Button>
                        </Left>
                        <Body alignItems = "center">
                        <Title style={{color:'#ffffff'}}>Settings</Title>
                        </Body>
                        <Right/>
                    </Header>
                    <Content>
                        <ListItem icon>
                            <Left>
                                <Icon name="md-notifications"/>
                            </Left>
                            <Body>
                            <Text>Notificaciones</Text>
                            </Body>
                            <Right>
                                <Switch value={false} />
                            </Right>
                        </ListItem>
                    </Content>
                    <Footer>
                        <Button block danger style={{height:55,width:500}}>
                            <Text>Logout</Text>
                        </Button>
                    </Footer>
                </Drawer>
            </Container>
        )
    }


}

export default SettingsB