import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

//with style-reset, you can bring all the old css resets you like so much to style components and is just one string interpolation away, YAY!

const globalStyle = createGlobalStyle`
    ${reset}
    body{
        background: rgb(189,189,189);
        background: linear-gradient(180deg, rgba(189,189,189,1) 0%, rgba(255,255,255,1) 100%);
        overflow: hidden;
        font-family: 'Oxygen', sans-serif;
    }
`;

export default globalStyle;
