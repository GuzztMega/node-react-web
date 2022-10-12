import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`
export const FilterArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;

  button{
    border: none;
    background: none;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #1f579c;
  margin-bottom: 20px;

  h1{
    color: #1f579c;
    position: relative;
    top: 38px;
    background: #FFF;
    padding: 0 15px;
  }
`