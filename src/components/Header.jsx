import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title> Random Cat</Title>
      {/* Navigation links can go here */}
    </StyledHeader>
  );
};

export default Header;
