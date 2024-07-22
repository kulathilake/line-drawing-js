var asciichart = require ('asciichart')


function getBresenhamLine(x0,y0,x1,y1){
    const dx = x1 - x0;
    let dy = y1 - y0;
    let yi = 1
    if(dy < 0 ){
        yi = -1
        dy = -dy
    }
    let D = 2*dy - dx;
    let x = x0;
    let y = y0
    let values = new Array()
    while(x <= x1) {
        values.push(y);
        if( D < 0 ) {
            D += 2*dy;
        }else {
            y = y + yi
            D = D - 2*dx
        }
        x++
    }
    return {values,plot:asciichart.plot(values)};
}


console.log(getBresenhamLine(0,1,213,-43).plot)
console.log(getBresenhamLine(0,1,213,43).plot)
