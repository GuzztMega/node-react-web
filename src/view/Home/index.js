/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import * as Style from './style';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';

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
      
      <Footer />
    </Style.Container>
  )
}

export default Home;