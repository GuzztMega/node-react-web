import React from 'react';
import * as Style from './style';

import iconDefault from '../../assets/default.png';

function TaskCard(){
  return (
    <Style.Container>

      <Style.TopCard>
        <img src={iconDefault} alt="Ícone da Tarefa" />
        <h2>Título</h2>
      </Style.TopCard>
      <Style.BottomCard>
        <strong>17/10/2020</strong>
        <span>10:00</span>
      </Style.BottomCard>

    </Style.Container>
  )
}

export default TaskCard;