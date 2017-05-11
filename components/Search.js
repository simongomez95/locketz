/**
 * Created by lope1 on 5/9/2017.
 */
import React, { Component } from 'react';
import { Container, Content, Body, Left, Right, Title, Header, Icon, Form, Input, Item, Button, Text
  , Card, CardItem, Thumbnail} from 'native-base';
import { Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';
import Drawer from 'react-native-drawer';
import SideBar from './CreatorSideBar';
import FollowButton from './FollowButton'

class Search extends Component {

  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {seguido: false}
  }

  _navigate(){
    this.props.navigator.push({
      name: 'Search', // Matches route.name
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
                <Icon name="menu"  style={{color:'#FFFFFF'}} />
              </Button>
            </Left>
            <Body alignItems="flex-end">
            <Title style={{color:'#FFFFFF'}}>Search</Title>
            </Body>
          </Header>
          <Content>
            <Header searchBar rounded style={{backgroundColor:"#7B1FA2"}}>
              <Item>
                <Icon name="ios-people" />
                <Input placeholder="People" />
                <Icon name="ios-search" />
              </Item>
              <Button transparent>
                <Text>Search</Text>
              </Button>
            </Header>
            <Grid>
              <Row>
                <Card>
                  <Row>
                  <Col size={3}>
                    <CardItem header>
                      <Thumbnail size={80} source={require('../img/pool2.jpg')} />
                      <Text style={{paddingLeft:15}}>Deadpool</Text>
                    </CardItem>
                  </Col>
                  <Col size={1} style={{justifyContent: "center"}}>
                    <FollowButton userId={"elUsuario"}/>
                  </Col>
                  </Row>
                  <CardItem>
                    <Body>
                    <Text note>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sapien sit amet neque vulputate ultrices.
                    </Text>
                    </Body>
                  </CardItem>
                </Card>
              </Row>
            </Grid>
          </Content>
        </Drawer>
      </Container>
    )
  }

}

export default Search;