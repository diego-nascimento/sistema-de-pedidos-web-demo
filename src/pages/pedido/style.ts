import styled from 'styled-components'
import media from 'styled-media-query'

export const Pagina = styled.div`
  min-height: 100vh;
  display: flex;
  min-width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;

  ${media.lessThan("medium")`
        flex-direction: column;
  `}
`;