/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import * as Style from './style';
import api from '../../sevice/api';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home(){
  const [getActiveFilter, setActiveFilter] = useState('all');
  const [getState, setState] = useState([]);
  const [getLateCount, setLateCount] = useState();
  
  async function loadTask(){
    await api.get(`/task/filter/${getActiveFilter}/22:22:22:22:22:22`)
      .then(response => {
        setState(response.data);
      });
  }

  async function lateVerify(){
    await api.get(`/task/filter/late/22:22:22:22:22:22`)
      .then(response => {
        setLateCount(response.data.length);
      });
  }

  function notification(){
    setActiveFilter('late');
  }

  useEffect(() => {
    loadTask();
    lateVerify();
  },[getActiveFilter])

  return (
    <Style.Container>
      <Header lateCount={getLateCount} clickNotification={notification}/>

      <Style.FilterArea>
        <button type="button" onClick={() => setActiveFilter('all')}>
          <FilterCard title='Todos'  activated={getActiveFilter == 'all'}  />
        </button>
        <button type="button" onClick={() => setActiveFilter('today')}>
          <FilterCard title='Hoje'   activated={getActiveFilter == 'today'} />
        </button>
        <button type="button" onClick={() => setActiveFilter('week')}>
          <FilterCard title='Semana' activated={getActiveFilter == 'week'} />
        </button>
        <button type="button" onClick={() => setActiveFilter('month')}>
          <FilterCard title='Mes'    activated={getActiveFilter == 'month'} />
        </button>
        <button type="button" onClick={() => setActiveFilter('year')}>
          <FilterCard title='Ano'    activated={getActiveFilter == 'year'} />
        </button>
      </Style.FilterArea>

      
      <Style.Title>
        <h1>{getActiveFilter == 'late' ? 'Tarefas Atrasadas' : 'Tarefas'}</h1>
      </Style.Title>

      <Style.Content>
        {
          getState.map(task => (
            <TaskCard type={task.type} title={task.title} when={task.when}/>
          ))
        }
      </Style.Content>
      
      <Footer />
    </Style.Container>
  )
}

export default Home;