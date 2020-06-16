import React from 'react';
import { css, jsx } from '@emotion/core';
import Title from 'components/title';
import Text from 'components/text';
import Container from 'components/container';

const Footer = ({ title, text }) => (
  <Container
    css={css`
      background-color: white;
    `}
  >
    <Title
      css={css`
        color: white;
      `}
    >
      {title}
    </Title>
    <Text>{text}</Text>
  </Container>
);

export default Footer;
