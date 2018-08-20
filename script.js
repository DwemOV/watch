// устанавливаем актуальное время
var today = new Date();
var minutes = today.getMinutes();
var hours = today.getHours();
var seconds = today.getSeconds();
var elemetSVG = document.getElementById('SVG');
/*расчет сдвига стрелок*/
hours = hours * 30 + minutes * 0.5;
minutes *= 6;
seconds *= 6;
/*добавляем стрелки*/
elemetSVG.innerHTML += "<line id='sec'    fill='none' stroke='#894F3F' stroke-width='3' x1='250' y1='250' x2='250' y2='22'  stroke-linejoin='null' stroke-linecap='null'>  <animateTransform attributeName='transform' type='rotate' from='" + seconds + " 250 250' to='" + (360 + seconds) + " 250 250' begin='0.1s' dur='60s' repeatCount='indefinite' />    </line>";
elemetSVG.innerHTML += "<line id='hour'   fill='none' stroke='#426373' stroke-width='5' x1='250' y1='250' x2='250' y2='100' stroke-linejoin='null' stroke-linecap='null'>  <animateTransform attributeName='transform' type='rotate' from='" + hours + " 250 250' to='" + (360 + hours) + "  250 250' begin='0s' dur='846000s'repeatCount='indefinite' />    </line>";
elemetSVG.innerHTML += "<line id='minute' fill='none' stroke='#426373' stroke-width='4' x1='250' y1='250' x2='250' y2='50'  stroke-linejoin='null' stroke-linecap='null'>  <animateTransform attributeName='transform' type='rotate' from='" + minutes + " 250 250' to='" + (360 + minutes) + "  250 250' begin='0s' dur='3600s' repeatCount='indefinite' />    </line>";