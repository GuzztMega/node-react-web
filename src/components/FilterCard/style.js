import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 260px;
  height: 75px;
  background: ${props => props.activated ? '#1f579c' : '#218a4e'};
  padding: 10px;
  cursor: pointer;

  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;

  img{
    width: 25px;
    height: 25px;
  }

  span{
    color: #FFF;
    font-weight: bold;
    align-self: flex-end;
    font-size: 18px;
  }

  :hover{
    background: #1f579c;
    img {
      width: 30px;
      height: 30px;
    }
  }
`