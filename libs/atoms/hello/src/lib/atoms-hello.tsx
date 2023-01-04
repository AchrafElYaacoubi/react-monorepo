import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AtomsHelloProps {}

const StyledAtomsHello = styled.div`
  color: pink;
`;

export function AtomsHello(props: AtomsHelloProps) {
  return (
    <StyledAtomsHello>
      <h1>Welcome to AtomsHello!</h1>
    </StyledAtomsHello>
  );
}

export default AtomsHello;
