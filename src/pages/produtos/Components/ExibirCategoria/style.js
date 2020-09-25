import styled from 'styled-components'

export const Categoria = styled.li `
display: flex;
flex-direction: row;
align-items: center;
background: red;
border-top: 1px solid black;
height: 100px;
cursor: pointer;


.imagem {
  width: 110px;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 15px;
  margin-left: 10px;
  margin-right: 10px;
}

.imagem img {
    width: 100%;
    border-radius: 15px;
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
     user-select: none; 
        
}

&:nth-child(2){
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

&:last-child{
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

img {
    padding: 10px 15px;
    
    width: 110px;
}
`;