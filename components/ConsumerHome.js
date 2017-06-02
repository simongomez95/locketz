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

  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
    this.content = new Content();
  }

  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };

  renderNewItems(items) {
    try {
      return items.map((item, index) => {
        if (typeof items[index] !== 'object') {
          return <Text>AAAAAAA</Text>;
        }
        else {
          return <HomeCard
            username={items[index].username}
            photoId={items[index].photoId}
          />
        }
      })
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return(
      <Container>
        <Drawer
          type="overlay"
          ref={(ref) => this._drawer = ref}
          content={<SideBar navigator={this.props.navigator}/>}
          tapToClose={true}
          openDrawerOffset={0.6} // 60% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
          })}>
          <Header style={{backgroundColor:"#9C27B0"}}>
            <Left>
              <Button transparent
                      onPress={() => {this.openDrawer()}}>
                <Icon name="menu"  style={{color:'#052A0F'}} />
              </Button>
            </Left>
            <Body alignItems = "center"><Title style={{color:'#052A0F'}}>Home</Title></Body>
            <Right/>
          </Header>

          <Content>
            {this.content.getUserPhotos(this.renderNewItems.bind(this))}
          </Content>
        </Drawer>
      </Container>

    )

  }

}

export default ConsumerHome
