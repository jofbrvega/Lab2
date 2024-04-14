import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2024 My Cat App. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;
