function FizzBuzz(limite, fizz_num, buzz_num){
    let resultado = [];
}
for(let i = 1; i <= limite; i++ ){
    if(i % fizz_num === 0 && i % buzz_num === 0){
        resultado.push("FizzBuzz")
    }
    else if(i % fizz_num === 0){
        resultado.push("Fizz")
    }
    else if(i % buzz_num === 0 ){
        resultado.push("Buzz")
    }
    else(resultado.push(i));{
    }

}
console.log(FizzBuzz(1000, 10, 30));