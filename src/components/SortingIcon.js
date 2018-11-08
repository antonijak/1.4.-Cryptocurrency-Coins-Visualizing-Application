import React from 'react';
import ArrowUpIcon from './ArrowUpIcon';
import ArrowDownIcon from './ArrowDownIcon'
import './SortingIcon.css'

const SortingIcon = (props) => {
  return props.sortAscending ?  
  <ArrowUpIcon theClassName={props.theClassName}/> : 
  <ArrowDownIcon theClassName={props.theClassName}/>
}

export default SortingIcon;


