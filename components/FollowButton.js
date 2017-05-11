/**
 * Created by nekothecat on 5/10/17.
 */


/**
 * Created by lope1 on 4/16/2017.
 */

import React, { Component } from 'react';
import { Button, Text} from 'native-base';
import Subscription from '../utils/Subscription'

class FollowButton extends Component {

  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      seguido: false
    };

    this.subscription = new Subscription()
  }

  render() {
    if (!this.state.seguido) {
      return <Button onPress={
        () => {
          this.subscription.follow(this.props.userId);
          this.setState({
            seguido: true
          })
        }
      }>
        <Text>Follow</Text>
      </Button>
    } else {
      return <Button onPress={
        () => {
          this.setState({
            seguido: false
          })
        }
      }>
        <Text>Unfollow</Text>
      </Button>
    }
  }

}

export default FollowButton
