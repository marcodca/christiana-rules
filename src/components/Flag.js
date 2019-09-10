import React from 'react';
import { useSpring } from "react-spring";
import styled from 'styled-components';
import Content from './Content';

/*
This component is gonna give the sense of dept to the elements within it, just like a mouse parallex would, check this react-spring demo for more on this: https://codesandbox.io/embed/r5x34869vq 
*/ 

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

const Container = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
`

const Flag = ({isReady}) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
        <Content animationProps={props} isReady={isReady}/>
    </Container>
  )
}

export default Flag