import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Message = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #000;
    z-index: 1;
`

const MessageOnMobile = () => {
     
    const [isMobile, setIsMobile] = useState(false);

    const checkIsMobile = () => {
        setIsMobile(window.innerWidth >= 768 ? false : true);
    };

useEffect(()=>{
    window.addEventListener('resize', checkIsMobile);
    return () => {
        window.removeEventListener('resize', checkIsMobile);
    }
})
    return (isMobile && <Message/>)}

export default MessageOnMobile