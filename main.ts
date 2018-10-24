class Point{
    x:number;
    y:number;

    constructor(x?:number, y?:number){
        this.x = x;

        
        this.y =y;

    }
   public drow (){
        console.log('X : ' + this.x + ' Y: ' + this. y);
    }
}



let point =new Point(5,6);

point.drow();