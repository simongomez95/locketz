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
                                <Icon name="menu"  style={{color:'#FFFFFF'}} />
                            </Button>
                        </Left>
                        <Body alignItems="flex-end">
                        <Title style={{color:'#FFFFFF'}}>Channel Analytics</Title>
                        </Body>
                    </Header>
                    <Content style={{padding: 10, flex:1}}>
                        <Chart
                            style={{width:350, height: 300}}
                            data={data1}
                            verticalGridStep={4}
                            type="line"
                        />
                        <Chart
                            style={{width:150, height: 150}}
                            data={data2}
                            type="pie"
                            showAxis={false}
                        />
                        <Chart
                            style={{width:150, height: 150}}
                            data={data2}
                            type="pie"
                            showAxis={false}
                        />
                    </Content>
                </Drawer>
            </Container>
        )
    }

}

export default AnalyticsBase