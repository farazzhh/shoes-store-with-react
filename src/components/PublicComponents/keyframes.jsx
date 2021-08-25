import { keyframes } from "styled-components";

export const OpacityAnimate = keyframes`
0%{ opacity: 100%;}
50%{ opacity : 0 ;}
100%{ opacity: 100%;}
`;

export const OpacityLetterSpacing = keyframes`
0%{letter-spacing: -10px;}
50%{letter-spacing: -8px;}
100%{letter-spacing: -10px;}
`;

export const SlideAnimate = keyframes`
0%{ transform: translate(-5px,-5px);}
25%{ transform: translate(0px,0px);}
50%{ transform: translate(-2px,-1px);}
75%{ transform: translate(0px,0px);}
100%{ transform: translate(-5px,-5px);}
`;

export const BGAnimate = keyframes`
from{ background-color: rgba(255 ,255,255, 0.1);}
to{ background-color: red;}
`;

export const BackButtonAnimate = keyframes`
from{ opacity : 0 ;}
to{ opacity : 0.5 ;}
`;

export const SubMenuAnimate = keyframes`
from{ opacity : 0 ;
    height : 0px;}
to{ opacity : 1 ;
     }
`;
