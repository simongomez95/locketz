/**
 * Created by nekothecat on 5/11/17.
 */

import React, { Component } from 'react';
import {Text, Card, CardItem, Thumbnail, Body, Content} from 'native-base';
import Subscription from '../utils/Subscription';
import FollowButton from './FollowButton';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SearchCard from "./SearchCard";
class SearchResults extends Component {

  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      results: false,
    };



    this.subscription = new Subscription();

  }

  componentWillMount() {
    this.awebo();
  }


  renderItems(items) {

    try {

      return items.map((item, index) => {
        console.log("PENEEEEE " + JSON.stringify(item));
        console.log("PENEEEEESOTEEE " + index);
        if (typeof items[index] !== 'object') {
          return <Text>AAAAAAA</Text>;
        }
        else {
          console.log(items.length);
          return <SearchCard
            username={items[index].username}
            userId={items[index].id}
          />
        }

      })
    } catch(err) {
      console.log(err);
    }

  }
  setItems(items) {
    this.setState({
      results: items
    })
  }

  awebo() {
    this.subscription.searchUser("c", this.setItems.bind(this));
  }

  render () {

    return (
    <Content>
      {this.renderItems(this.state.results)}
    </Content>

    );
  }

}

export default SearchResults
