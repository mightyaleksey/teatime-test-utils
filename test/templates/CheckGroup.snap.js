import CheckGroup from 'teatime-components/component/CheckGroup';
import React from 'react';

export default () => (
  <CheckGroup
    name='checkGroup-control'
    options={[
      {label: 'Ducati', value: 'ducati'},
      {label: 'Honda', value: 'honda'},
      {label: 'Jawa', value: 'jawa'},
    ]}/>
);
