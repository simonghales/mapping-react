import React, {Component} from 'react';

const styles = require('./Home.scss');

export default class Home extends Component {
  render() {
    return (
      <div className={styles['Home']}>
        Home
      </div>
    );
  }
}
