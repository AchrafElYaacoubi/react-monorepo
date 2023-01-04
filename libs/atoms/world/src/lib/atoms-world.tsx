import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AtomsWorldProps {}

const StyledAtomsWorld = styled.div`
  color: pink;
`;

export function AtomsWorld(props: AtomsWorldProps) {
  return (
    <StyledAtomsWorld>
      <h1>Welcome to AtomsWorld!</h1>
    </StyledAtomsWorld>
  );
}

export default AtomsWorld;
