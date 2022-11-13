import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #218a4e;
  display: flex;
  border-bottom: 5px solid #dde330;
`
 
export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center; 
  padding-left: 12px;

  img {
    width: 100px;
    height: 45px;
  }
`
 
export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content flex-end;

  button{
    background: none;
    border: none;
    cursor: pointer;
  }

  a, button {
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    &:hover{
      color: #dde330;
    }
  }

  #notification{
    img{
      width: 25px;
      height: 30px;
    }
    span {
      background: #FFF;
      color: #989c28;
      padding: 2px 6px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }

    &:hover{
      opacity: 0.5;
    }
  }

  .divider::after{
    content: "|";
    margin: 0 10px;
    color: #FFF;
  }
`
 