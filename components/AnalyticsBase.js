/**
 * Created by lope1 on 5/7/2017.
 */
import React, { Component } from 'react';
import { Container, Content, Body, Left, Right, Title, Header, Icon, Form, Input, Item, Button, Text
    , List, ListItem} from 'native-base';
import { Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';
import Chart from 'react-native-chart';
import Drawer from 'react-native-drawer';
import SideBar from './CreatorSideBar';

const data1 = [
    [0, 50],
    [1, 120],
    [5, 560],
    [10, 1200],
];
const data2 =[
    ["hombre",75],
    ["mujer",25]
];
const data3 =[
    ["edad1",60],
    ["edad2",40]
];

class AnalyticsBase extends Component {

    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    _navigate(){
        this.props.navigator.push({
            name: 'AnalyticsBase', // Matches route.name
        })
    }

    closeDrawer = () => {
        this._drawer.close()
    };
    openDrawer = () => {
        this._drawer.open()
    };

    render(){
        return(
            <Container >
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
                        <Title style={{color:'#ffffff'}}>Analytics</Title>
                        </Body>
                        <Right/>
                    </Header>
                    <Content>
                        <Grid>
                            <Col alignItems="center">
                                <Row style={{paddingTop:15}}>
                                    <Col alignItems="center">
                                        <Row>
                                            <Title>
                                                <Text>Crecimiento de Segudores</Text>
                                            </Title>
                                        </Row>
                                        <Row alignItems="center" style={{paddingTop:15}}>
                                            <Chart
                                                style={{width:300, height: 250}}
                                                data={data1}
                                                verticalGridStep={4}
                                                type="line"
                                            />
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{paddingTop:15}}>
                                    <Col alignItems="center">
                                        <Row>
                                            <Title>
                                                <Text>Sexos</Text>
                                            </Title>
                                        </Row>
                                        <Row alignItems="center" style={{paddingTop:15}}>
                                            <Chart
                                                style={{width:150, height: 150, alignItems:'center', justifyContent:'center'}}
                                                data={data2}
                                                type="pie"
                                                showAxis={false}
                                            />
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{paddingTop:15}}>
                                    <Col alignItems="center">
                                        <Row>
                                            <Title>
                                                <Text>Edades</Text>
                                            </Title>
                                        </Row>
                                        <Row alignItems="center" style={{paddingTop:15}}>
                                            <Chart
                                                style={{width:150, height: 150, alignItems:'center', justifyContent:'center'}}
                                                data={data3}
                                                type="pie"
                                                showAxis={false}
                                            />
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Grid>



                    </Content>
                </Drawer>
            </Container>
        )
    }

}

export default AnalyticsBase