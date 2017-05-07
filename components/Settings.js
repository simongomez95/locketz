/**
 * Created by lope1 on 5/6/2017.
 */
import React, { Component } from 'react';
import { Container, Content, Body, Left, Right, Title, Header, Icon, Form, Input, Item, Button, Text
    , List, ListItem, Switch,Footer} from 'native-base';
import Drawer from 'react-native-drawer';
import { Image } from 'react-native';
import SideBar from './CreatorSideBar';

class Settings extends Component {

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
                    content={<SideBar/>}
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
                                <Icon name="cog" style={{fontSize:25,color:'#FFFFFF'}}/>
                            </Button>

                        </Left>
                        <Body alignItems="flex-end">
                        <Title style={{color:'#FFFFFF'}}>Settings</Title>
                        </Body>
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

export default Settings