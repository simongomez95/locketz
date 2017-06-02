/**
 * Created by yolas on 6/2/2017.
 */
/**
 * Created by nekothecat on 6/1/17.
 */
/**
 * Created by nekothecat on 5/11/17.
 */

import React, { Component } from 'react';
import {Text, Card, CardItem, Thumbnail, Body} from 'native-base';
import Subscription from '../utils/Subscription';
import FollowButton from './FollowButton';
import { Col, Row, Grid } from 'react-native-easy-grid';
class SearchCard extends Component {

  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      results: {}
    };

    this.subscription = new Subscription()
  }

  render() {
    return (
      <Card>
        <CardItem header>
          <Thumbnail size={80} source={require('../img/pool2.jpg')} />
          <Text style={{paddingLeft:15}}>{this.props.username}</Text>
        </CardItem>

        <CardItem>
          <Body>
          <Text note>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sapien sit amet neque vulputate ultrices.
          </Text>
          </Body>
        </CardItem>
      </Card>
    )

  }

}

export default SearchCard
