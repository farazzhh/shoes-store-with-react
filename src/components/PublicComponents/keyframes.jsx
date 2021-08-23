import { keyframes } from "styled-components";

export const OpacityAnimate = keyframes`
from{ opacity : 0 ;}
to{ opacity: 100%;}
`;

export const OpacityLetterSpacing = keyframes`
from{letter-spacing: -20px;}
to{letter-spacing: -10px;}
`;

export const SlideAnimate = keyframes`
from{ transform: scale(1 , 1);}
to{ transform: scale(1.1,1.1);}
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
