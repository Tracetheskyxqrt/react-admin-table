import * as React from 'react';

import './Spiner.scss';

export class Spiner extends React.Component<{}> {
  render() {
    return (
      <div className='spiner-container'>
        <i className='fa fa-spinner fa-spin' />
      </div>
    );
  }
}

export default Spiner;
