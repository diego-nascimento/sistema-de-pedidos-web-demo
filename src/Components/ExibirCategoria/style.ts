import styled from 'styled-components'

export const Categoria = styled.li `
display: flex;
flex-direction: row;
align-items: center;
background: rgba(255, 0, 0, .75);
border-top: 1px solid black;
padding:20px 0px;
cursor: pointer;


.imagem {
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 15px;
  margin-left: 10px;
  margin-right: 10px;
  
  @media(max-width: 500px){
      width: 120px;
  }
}

.imagem img {
    width: 100%;
    border-radius: 5px;
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
`;