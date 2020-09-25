import styled from 'styled-components'

export const Cabecalho = styled.header `
  width: 100%;
  background-color: blue;
  margin: 0 auto;
  background: rgb(48, 48, 48);
  color: white;
  font-size: 0.8rem;
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
.header-contatos {
  height: 40px;
}



.contatos{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
}
img {
  height: 30px;
  color: white;
}

.contatos p {
  margin-left: 25px;
}

a {
  color: white;
}

.contatos p:first-child {
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
}

.banner .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.banner .container h1 {
  margin-top: 20px;
  font-size: 2.4rem;
  text-align: center;
  -webkit-touch-callout: none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
   user-select: none; 
}

.titulo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  -webkit-touch-callout: none; 
        -webkit-user-select: none; 
        -khtml-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
         user-select: none; 
}


`;
