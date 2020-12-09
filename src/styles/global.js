import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,700&display=swap');

* {
  margin: 0;
  outline: 0;
  border: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased !important;
}

  

#root {
  min-height: 100%;
}

html {
  font-size: 62,5%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

h1, h2, h3{
  font-family: 'Courgette', cursive;
}

h1 {
  text-transform: uppercase;
  font-size: 3.0rem;
  letter-spacing: 0.1em;
  font-weight: bold;

  @media(max-width: 500px){
    font-size: 1.8rem;
  }
}

h2 {
  text-transform: uppercase;
  font-size: 2.5rem;
  letter-spacing: 0.1em;
  font-weight: bold;

  @media(max-width: 500px){
    font-size: 1.5rem;
  }
}

h3{
  @media(max-width: 500px){
    font-size: 1.1rem;
  }
}


p {
  font-size: 1.2rem;
  font-family: 'Roboto Slab', serif;

  @media(max-width: 500px){
    font-size: .7rem;
  }
}


`;
