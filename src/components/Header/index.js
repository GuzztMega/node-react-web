import React from 'react';
import * as Style from './style';
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header({ lateCount, clickNotification }){
  return (
    <Style.Container>
      <Style.LeftSide>
        <img src={logo} alt="Logo" />
      </Style.LeftSide>
      <Style.RightSide>
        <a href="#">INÍCIO</a>
        <span className='divider' />
        <a href="#">NOVA TAREFA</a>
        <span className='divider' />
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className='divider' />
        <button onClick={clickNotification} id="notification">
          <img src={bell} alt="Notificações" />
          <span> {lateCount} </span>
        </button>
      </Style.RightSide>
    </Style.Container>
  )
}

export default Header;