import * as React from 'react';

const styles = require('./<%= pascalEntityName %>.scss');

interface MyProps {}
interface MyState {}

export default class <%= pascalEntityName %> extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div className={styles['<%= pascalEntityName %>']}>
        <%= pascalEntityName %>
      </div>
    );
  }
}
