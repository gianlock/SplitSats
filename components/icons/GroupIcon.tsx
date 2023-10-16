
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, Text } from 'react-native';
import { useAssets } from 'expo-asset';

// SVG XML data for the icon (replace with your SVG content)
const svgData = `
<svg
   width="50"
   height="50"
   viewBox="0 0 50 50"
   stroke-width="1.92"
   stroke="#000000"
   fill="none"
   version="1.1"
   id="svg2"
   sodipodi:docname="contacts-svgrepo-com.svg"
   inkscape:version="1.3 (0e150ed6c4, 2023-07-21)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="namedview2"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="12.828125"
     inkscape:cx="31.961023"
     inkscape:cy="32"
     inkscape:window-width="1920"
     inkscape:window-height="1017"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2" />
  <g
     id="SVGRepo_bgCarrier"
     stroke-width="0" />
  <g
     id="SVGRepo_tracerCarrier"
     stroke-linecap="round"
     stroke-linejoin="round" />
  <g
     id="SVGRepo_iconCarrier"
     transform="translate(2.205,-7.4999997)">
    <circle
       cx="22.83"
       cy="22.57"
       r="7.5100002"
       id="circle1" />
    <path
       d="M 38,49.94 A 15.2,15.2 0 0 0 22.79,34.74 v 0 a 15.2,15.2 0 0 0 -15.2,15.2 z"
       id="path1" />
  </g>
</svg>
`;

const GroupIcon = () => {
  return <SvgXml xml={svgData} width="24" height="24" />;
};

export default GroupIcon;