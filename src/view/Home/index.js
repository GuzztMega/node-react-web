/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import * as Style from './style';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home(){
  const [getActiveFilter, setActiveFilter] = useState('today');

  return (
    <Style.Container>
      <Header />

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
        <h1>Tarefas</h1>
      </Style.Title>

      <Style.Content>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </Style.Content>
      
      <Footer />
    </Style.Container>
  )
}

export default Home;