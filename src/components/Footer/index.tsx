import React from 'react';
import { Container, DesignedBy, Icons8 } from './styles';

const Footer = () => {
  return (
    <Container>
      <a href='#HeroSection'>
        <img
          className='up'
          src='https://img.icons8.com/clouds/100/000000/up.png'
          alt='back to top'
        />
      </a>
      <DesignedBy>
        designed with{' '}
        <span className='emoji' role='img' aria-label='heart emoji'>
          ❤️
        </span>{' '}
        by @sksuryan
      </DesignedBy>
      <Icons8>
        icons by{' '}
        <a href='https://icons8.com/' target='_blank' rel='noopener noreferrer'>
          icons8
        </a>
      </Icons8>
    </Container>
  );
};

export default Footer;
