function max(x,y){
    if (x>y){
        return x ;
    }else{
        return y;
    }
}

const max2 = (x,y)=> x>y? x : y;


console.log( max(2,4));
console.log( max2(2,4));

const ePaisagem = (larg,alt) => larg > alt;

console.log (ePaisagem(30,20))