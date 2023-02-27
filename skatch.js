var canvas2=document.getElementById("canvas")
ctx=canvas.getContext("2d")
color="blue"
ctx.beginPath();
 ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.arc(200, 250, 40 ,0 , 2*Math.PI)
   ctx.stroke();
   color="red"
   ctx.beginPath();
    ctx.strokeStyle = color;
     ctx.lineWidth = 3;
     ctx.arc(400, 250, 40 ,0 , 2*Math.PI)
      ctx.stroke();
      color="black"
      ctx.beginPath();
       ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.arc(300, 250, 40 ,0 , 2*Math.PI)
         ctx.stroke();
         color="yellow"
ctx.beginPath();
 ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.arc(250, 290, 40 ,0 , 2*Math.PI)
   ctx.stroke();
   color="green"
ctx.beginPath();
 ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.arc(350, 290, 40 ,0 , 2*Math.PI)
   ctx.stroke();