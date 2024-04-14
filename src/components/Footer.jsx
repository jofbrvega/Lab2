import React from 'react';
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
      <p>© 2024 My App. All rights reserved.</p>
      {/* Social media links or other relevant information */}
    </StyledFooter>
  );
};

export default Footer;
