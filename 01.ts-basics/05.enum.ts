enum Arithmetic{
    Add,
    Sub,
    Div,
    Mul

}
function Arithmetick(a: number, b: number ,type:Arithmetic){
    console.log(type)
}
Arithmetick(34,32,Arithmetic.Mul )