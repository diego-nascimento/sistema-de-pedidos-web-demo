import styled from 'styled-components'

export const Cabecalho = styled.header `
  width: 100%;
  background-color: blue;
  margin: 0 auto;
  background: rgb(48, 48, 48);
  color: white;
  box-sizing: border-box;

.container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 15px;
}

.contatos{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  height: 100%;
}

span{
  margin-left: 5px;
}

img {
  height: 30px;
  color: white;
}

.contatos div {
  margin-left: 25px;
  height: 40px;
  display: flex;
  align-items: center;

}

a {
  color: white;
}

.contatos div:first-child {
  margin-left: 0;
}

.redesociais{
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.redesociais a {
  margin-left: 25px;
}

.redesociais a:first-child {
  margin-left: 0;
}

.banner {
  width: 100%;
  background-color: green;
  padding: 20px 0px;
}

.banner img {
  width: 140px;
  height: 100%;

  @media(max-width: 400px){
    width: 80px;
  }
}

.banner .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.banner .container h1 {
  margin-top: 20px;
  text-align: center;
  -webkit-touch-callout: none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
   user-select: none; 
   position: relative;
  display: flex;
  justify-content: center;
}

.banner .container h1::before{
  content: '';
  width: 35%;
  height: 3px;
  background-color: white;
  position: absolute;
  margin-top: 20px; 
  top: -30px;
}

.banner .container h1::after{
  content: '';
  width: 25%;
  height: 3px;
  background-color: white;
  position: absolute;
  margin-top: 20px; 
  bottom: -10px;
}



.titulo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0,0,0, .8);
  -webkit-touch-callout: none; 
        -webkit-user-select: none; 
        -khtml-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
         user-select: none; 
}


`;
