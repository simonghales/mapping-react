import * as React from 'react';

const styles = require('./App.scss');

interface MyProps {}
interface MyState {}

export default class App extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div className={styles['App']}>
        {this.props.children}
      </div>
    );
  }
}
