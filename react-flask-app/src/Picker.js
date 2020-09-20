import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";

function color_meter(cwith, ccolor) {

  if (!cwith && !ccolor) return;

  var _cwith = (cwith.charAt(0) == "#") ? cwith.substring(1, 7) : cwith;
  var _ccolor = (ccolor.charAt(0) == "#") ? ccolor.substring(1, 7) : ccolor;

  var _r = parseInt(_cwith.substring(0, 2), 16);
  var _g = parseInt(_cwith.substring(2, 4), 16);
  var _b = parseInt(_cwith.substring(4, 6), 16);

  var __r = parseInt(_ccolor.substring(0, 2), 16);
  var __g = parseInt(_ccolor.substring(2, 4), 16);
  var __b = parseInt(_ccolor.substring(4, 6), 16);

  var p1 = (_r / 255) * 100;
  var p2 = (_g / 255) * 100;
  var p3 = (_b / 255) * 100;

  var perc1 = Number.parseFloat((p1 + p2 + p3) / 3).toPrecision(5);

  var p1 = (__r / 255) * 100;
  var p2 = (__g / 255) * 100;
  var p3 = (__b / 255) * 100;

  var perc2 = Number.parseFloat((p1 + p2 + p3) / 3).toPrecision(5);

  return Number.parseFloat(100 - Math.abs(perc1 - perc2)).toPrecision(5);
}
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function Picker() {
  const [color, setColor] = useState("#aabbcc");
  const [score, setScore] = useState("n/a");
  const [true_color, setTrueColor] = useState(randomColor())

  useEffect(() => {
    document.getElementById('color-box').style.backgroundColor = color
    document.body.style.backgroundColor = true_color
  });

  return (
    <div>
      <p>Your Score: {score}</p>

      <Button
        style={{ margin: '5px' }}
        onClick={() => setScore(color_meter(true_color, color) + '%')}
        variant='outlined'
        color="inherit"
      >Score Me</Button>
      <Button
        style={{ margin: '5px' }}
        onClick={() => setTrueColor(randomColor())}
        variant='outlined'
        color="inherit"
      >Randomize!</Button>

      <span height="50px"></span>
      <div style={{ display: "flex", 'justify-content': "center" }}>
        <HexColorPicker color={color} onChange={setColor} />
      </div>
    </div>
  );
}

export default Picker;