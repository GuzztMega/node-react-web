import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  height: 180px;
  box-shadow: 15px 15px 15px rgba(158,158,158,0.5);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  cursor: pointer;
  transition: all 0.3s ease;


  &:hover{
    opacity: 0.5;
  }
`;

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;

  strong{
    color: #1f579c;
    font-weight: bold;
  }

  span {
    color: #707070;
  }
`;