/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import * as Style from './style';
import api from '../../sevice/api';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

// import iconCalendar from '../../assets/calendar.png';
// import iconClock from '../../assets/clock.png';

function Task(){
  const [getLateCount, setLateCount] = useState();
  const [getType, setType] = useState();

  useEffect(() => {
    async function lateVerify(){
      await api.get(`/task/filter/late/22:22:22:22:22:22`)
        .then(response => {
          setLateCount(response.data.length);
        });
    };

    lateVerify();
  },[]);

  return (
    <Style.Container>
      <Header lateCount={getLateCount}/>
      
      <Style.Form>
      
        <Style.TypeIcons>
          {
            TypeIcons.map((icon, index) => (
              index>0 && 
              <button type="button" onClick={() => setType(index)}>
                <img src={icon} alt="Tipo da Tarefa" className={getType && getType != index && 'inactive'}/>                
              </button>
            ))
          }
        </Style.TypeIcons>

        <Style.Input>
          <span>Título</span>
          <input type='text' placeholder='Título da Tarefa...' />
        </Style.Input>
        
        <Style.TextArea>
          <span>Título</span>
          <textarea rows={5} placeholder='Detalhes da Tarefa...' />
        </Style.TextArea>

        <Style.Input>
          <span>Data</span>
          <input type='date'/>
          {/* <img src={iconCalendar} alt='Calendário' /> */}
        </Style.Input>

        <Style.Input>
          <span>Hora</span>
          <input type='time'/>
          {/* <img src={iconClock} alt='Relógio' /> */}
        </Style.Input>

        <Style.Options>
          <div>
            <input type='checkbox' />
            <span>Concluído</span>
          </div>
          <button type='button'>Excluir</button>
        </Style.Options>

        <Style.Save>
          <button type='button'>SALVAR</button>
        </Style.Save>

      </Style.Form>

      <Footer />
    </Style.Container>
  )
}

export default Task;