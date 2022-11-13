import React, { useMemo } from 'react';
import { format } from 'date-fns';
import * as Style from './style';

import typeIcons from '../../utils/typeIcons';

function TaskCard({ type, title, when }){

  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));

  return (
    <Style.Container>

      <Style.TopCard>
        <img src={typeIcons[type]} alt="Ícone da Tarefa" />
        <h2>{ title }</h2>
      </Style.TopCard>
      <Style.BottomCard>
        <strong>{ date }</strong>
        <span>{ hour }</span>
      </Style.BottomCard>

    </Style.Container>
  )
}

export default TaskCard;