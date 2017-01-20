import React from 'react';
import Select from 'teatime-components/component/Select';

export default () => (
  <Select
    name='select-control'
    options={[
      {label: 'Ducati', value: 'ducati'},
      {label: 'Honda', value: 'honda'},
      {label: 'Jawa', value: 'jawa'},
    ]}
    searchable={true}
    value='jawa'/>
);
