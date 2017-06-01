/**
 * Created by nekothecat on 5/11/17.
 */

import React, { Component } from 'react';
import {Text, Card, CardItem, Thumbnail, Body} from 'native-base';
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
      results: false
    }
    ;



    this.subscription = new Subscription()
  }

  renderItems() {
    let hum = this.subscription.searchUser("c");
    this.setState({
      results: hum
    });


    return this.state.results.map((item, index) => {
      if (typeof this.state.results[index] !== 'object') {
        return <Text>AAAAAAA</Text>;
      }
      else {
        return <SearchCard
          username={this.state.results[index].username}
          userId={this.state.results[index].id}
        />
      }

    })

  }

  render () {
    return (
      <Col className='App'>
        {this.renderItems()}
      </Col>
    );
  }

}

export default SearchResults
