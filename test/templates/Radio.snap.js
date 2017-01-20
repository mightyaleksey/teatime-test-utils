import Radio from 'teatime-components/component/Radio';
import React from 'react';

export default () => (
  <Radio
    name='radio-control'
    options={[
      {label: 'Ducati', value: 'ducati'},
      {label: 'Honda', value: 'honda'},
      {label: 'Jawa', value: 'jawa'},
    ]}/>
);
