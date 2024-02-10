class car{
make:string;
model:string
constructor(make:string,model:string){
this.make=make
this.model=model
}
start():void{
console.log("enginer started")
}
}

const myCar=new car ("tyota","camry")
console.log(myCar.model,myCar.make)
myCar.start();
