import React from 'react';
import { useSpring } from "react-spring";

const makeTransform = (xAndYOffset = 1) => (x, y) => `translate3d(${x / xAndYOffset}px,${y / xAndYOffset}px,0)`
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]


const Flag = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  return (
    <div
    style={{width: 'inherit', height: 'inherit', position: `relative`}}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
        {/* <Inner  makeTransform={makeTransform} animationProps={props} /> */}
    </div>
  )
}

export default Flag