import React, {Component} from 'react';

const styles = require('./<%= pascalEntityName %>.scss');

export default class <%= pascalEntityName %> extends Component {
  render() {
    return (
      <div className={styles['<%= pascalEntityName %>']}>
        <%= pascalEntityName %>
      </div>
    );
  }
}
