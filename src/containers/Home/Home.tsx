import * as React from 'react';

const styles = require('./Home.scss');

interface MyProps {}
interface MyState {}

export default class Home extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div className={styles['Home']}>
        Home
      </div>
    );
  }
}
