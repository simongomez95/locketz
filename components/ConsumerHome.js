/**
 * Created by lope1 on 4/16/2017.
 */

import React, { Component } from 'react';
import { Container, Content, Body, Left, Right, Title, Header, Icon, Form, Input, Item, Button, Text, List,
        ListItem, Thumbnail, Card, CardItem} from 'native-base';
import { Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';

class ConsumerHome extends Component {

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
                    {/*<List>*/}
                        {/*<ListItem>*/}
                            {/*<Thumbnail size={80} source={require('../img/pool2.jpg')} />*/}
                            {/*<Body>*/}
                                {/*<Text>BoobPool</Text>*/}
                                {/*<Text note>Hola a Todos Mis fans de Mis nudes</Text>*/}
                            {/*</Body>*/}
                        {/*</ListItem>*/}

                        {/*<ListItem>*/}
                            {/*<Thumbnail size={80} source={require('../img/pool2.jpg')} />*/}
                            {/*<Body>*/}
                            {/*<Text>BoobPool</Text>*/}
                            {/*<Text note>Hola a Todos Mis fans de Mis nudes</Text>*/}
                            {/*</Body>*/}
                        {/*</ListItem>*/}

                        {/*<ListItem>*/}
                            {/*<Thumbnail size={80} source={require('../img/pool2.jpg')} />*/}
                            {/*<Body>*/}
                            {/*<Text>BoobPool</Text>*/}
                            {/*<Text note>Hola a Todos Mis fans de Mis nudes</Text>*/}
                            {/*</Body>*/}
                        {/*</ListItem>*/}
                    {/*</List>*/}
                </Content>
            </Container>

        )

    }

}

export default ConsumerHome
