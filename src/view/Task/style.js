import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.div`
  width: 50%;
  margin-bottom: 70px;
` 

export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img{
    width:  50px;
    height: 50px;
    margin: 10px;
    cursor: pointer;

    &:hover{
      opacity: 0.5;
    }
  }

  .inactive{
    opacity: 0.5;
  }

  button{
    border:none;
    background:none;
  }
`

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  span{
    color: #707070;
    margin: 5px 0;
  }

  input {
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #EE6B26;
  }

  img{
    width: 20px;
    height: 20px;
    bottom: 30px;
    left: 90%;
    position: relative;
  }
`

export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span{
    color: #707070;
    margin: 5px 0;
  }

  textarea{
    font-size: 16px;
    border: 1px solid #EE6B26;
  }
`

export const Options = styled.div`
display: flex;  
justify-content: space-between;

button{
  font-weight: bold;
  color: #20295F;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;

  &:hover{
    opacity: 0.7;
  }
}

div{
  display: flex;
  align-items: center;
  color: #EE6B26;
  font-weight: bold;
  font-size: 18px;
}
`

export const Save = styled.div`
  width: 100%;  
  margin-top: 30px;

  button{
    width: 100%;
    background: #EE6B26;
    border: none;
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
    
    &:hover{
      opacity: 0.7;
    }
  }
`
