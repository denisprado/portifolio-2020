import React from 'react';
import { css } from '@emotion/core';
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
      {title && title}
    </Title>
    <Text>{text && text}</Text>
  </Container>
);

export default Footer;
