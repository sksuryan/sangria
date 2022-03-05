import React from 'react';

import { Container, Title } from '../globalStyles';
import { SkillContainer, Skill as SkillStyle } from './styles';

const SkillsArr = [
  'TypeScript',
  'NextJS',
  'React',
  'Redux',
  'GraphQL',
  'SASS',
  'Webpack',
  'Node',
  'Git & GitHub',
  'Docker',
  'Firebase',
  'MongoDB',
  'SQL',
];

interface SkillProps {
  skill: string;
}

const Skill: React.FC<SkillProps> = ({ skill }) => (
  <SkillStyle>
    <span role='img' className='emoji' aria-label='sparkles emoji'>
      ✨
    </span>{' '}
    {skill}
  </SkillStyle>
);

const Skills = () => {
  return (
    <Container>
      <Title>
        <img
          src='https://img.icons8.com/bubbles/100/000000/laptop.png'
          alt='laptop icon'
        />{' '}
        <p>Skills</p>
      </Title>
      <SkillContainer>
        {SkillsArr.map((skill) => (
          <Skill skill={skill} />
        ))}
      </SkillContainer>
    </Container>
  );
};

export default Skills;
