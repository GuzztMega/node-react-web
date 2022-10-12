import React from 'react';
import * as Style from './style';

import filter from '../../assets/filter.png';

function FilterCard({title, activated}){
  return (
    <Style.Container activated={activated}>
      <img src={filter} alt="Filtro" />
      <span>{title}</span>
    </Style.Container>
  )
}

export default FilterCard;