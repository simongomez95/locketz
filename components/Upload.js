/**
 * Created by lope1 on 6/2/2017.
 */
import React, { Component } from 'react';
import { Container, Content, Body, Left, Right, Title, Header, Icon, Form, Input, Item, Button, Text
    , List, ListItem} from 'native-base';
import { Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';
import Chart from 'react-native-chart';
import Drawer from 'react-native-drawer';
import SideBar from './CreatorSideBar';
import Camera from 'react-native-camera';

class Upload extends Component{

    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    _navigate(){
        this.props.navigator.push({
            name: 'Upload', // Matches route.name
        })
    }

    closeDrawer = () => {
        this._drawer.close()
    };
    openDrawer = () => {
        this._drawer.open()
    };

    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }

    render() {
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
                    <Header style={{backgroundColor: "#9C27B0"}}>
                        <Left>
                            <Button transparent
                                    onPress={() => {
                                        this.openDrawer()
                                    }}>
                                <Icon name="menu" style={{color: '#ffffff'}}/>
                            </Button>
                        </Left>
                        <Body alignItems="center">
                        <Title style={{color: '#ffffff'}}>Upload</Title>
                        </Body>
                        <Right/>
                    </Header>
                    <Content>
                        <Camera
                            ref={(cam) => {
                            this.camera = cam;
                        }}
                            style={{flex: 0,
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                height:400}}
                            aspect={Camera.constants.Aspect.fill}
                        >
                            <Text style={{
                                flex: 0,
                                backgroundColor: '#fff',
                                borderRadius: 5,
                                color: '#000',
                                padding: 10,
                                margin: 40
                            }} onPress={this.takePicture.bind(this)}>
                                [CAPTURE]
                            </Text>
                        </Camera>
                    </Content>
                </Drawer>
            </Container>
        )
    }
}

export default Upload
