import React, { Component } from 'react';
import { Container, Content, Body, Left, Right, Title, Header, Icon, Form, Input, Item, Button, Text
        , List, ListItem} from 'native-base';
import { Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';

class CreatorSideBar extends Component {

    static propTypes = {}
    static defaultProps = {}

    constructor(props) {
        super(props)
        this.state = {}
    }

    navigate(id) {
        this.props.navigator.push({ id });
    }


    render(){
        return(
            <Container style={{backgroundColor:"#BDBDBD"}}>
                <Header style={{backgroundColor:"#8BF0A7", height:100}}>
                    <Body alignItems="flex-end">
                    <Title style={{color:'#052A0F'}}>Locketz</Title>
                    <Icon name="cog" style={{color:'#052A0F'}}/>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <ListItem>
                            <Body>
                                <Text>
                                    Home
                                </Text>
                            </Body>
                        </ListItem>

                        <ListItem>
                            <Body>
                                <Text>
                                    Content
                                </Text>
                            </Body>
                        </ListItem>

                        <ListItem>
                            <Body>
                                <Text>
                                    Upload
                                </Text>
                            </Body>
                        </ListItem>

                        <ListItem>
                            <Body>
                                <Text>
                                    Analytics
                                </Text>
                            </Body>
                        </ListItem>

                        <ListItem>
                            <Body>
                                <Text>
                                    Settings
                                </Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default CreatorSideBar