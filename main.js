
const dragDOM = document.getElementById('drag');
const body = document.body;

const MD = Rx.Observable.fromEvent(dragDOM, 'mousedown');
const MU = Rx.Observable.fromEvent(body, 'mouseup');
const MM = Rx.Observable.fromEvent(body, 'mousemove');

MD
	.map(event => MM.takeUntil(MU))
    .concatAll()
    .map(event => ({ x: event.clientX, y: event.clientY }))
    .subscribe(pos => {
        // console.log( pos.x , pos.y );
  	    dragDOM.style.left = pos.x + 'px';
        dragDOM.style.top = pos.y + 'px';
  })


const videoID = 'bgi3Uaab1ok';
const url = `'https://www.youtube.com/embed/${videoID}'`;


$(document).ready(function(){
    $( "#drag" ).mousedown(function(e) {
        e.preventDefault();
        console.log("down")
        $('#drop').mouseup(function(){
            $( "#drop" ).append( `<iframe width='320' height='180'src=${url} frameborder='0' id='dropIF'></iframe>`);
            console.log(url)
            $("drag").hide()
         }
        );
      });
});
        