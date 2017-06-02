/**
 * Created by lope1 on 5/9/2017.
 */
import React, { Component } from 'react';
import { Container, Content, Body, Left, Right, Title, Header, Icon, Form, Input, Item, Button, Text
} from 'native-base';
import { Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';
import Drawer from 'react-native-drawer';
import SideBar from './ConsumerSideBar';
import SearchResults from "./SearchResults";

class Search extends Component {

  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      searched: false
    }
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

  showResults() {
    if (this.state.searched) {
      return <SearchResults/>
    }
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
                <Icon name="menu"  style={{color:'#FFFFFF'}} />
              </Button>
            </Left>
            <Body alignItems="flex-end">
            <Title style={{color:'#FFFFFF'}}>Search</Title>
            </Body>
          </Header>
          <Header searchBar rounded style={{backgroundColor:"#7B1FA2"}}>
            <Item>
              <Icon name="ios-people" />
              <Input placeholder="People" />
              <Icon name="ios-search" />
            </Item>
            <Button transparent onPress={() => {this.setState({searched: true})}}>
              <Text>Search</Text>
            </Button>
          </Header>
          {this.showResults()}
        </Drawer>
      </Container>
    )
  }

}

export default Search;