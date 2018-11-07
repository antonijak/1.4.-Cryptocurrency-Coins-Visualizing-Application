import React from 'react';
import ArrowUpIcon from './ArrowUpIcon';
import ArrowDownIcon from './ArrowDownIcon'
import './SortingIcon.css'

const SortingIcon = (props) => {
  return props.sortDescending ?  <ArrowUpIcon /> : <ArrowDownIcon />
}

export default SortingIcon;


