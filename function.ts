function doSomething() {
  console.log("Jello")
}

function donothing(): void {

}

function withPara(name: string, age: number) {
  console.log(name);
}

withPara("Hla Hla", 1)

///callback

function add(num1: number, num2: number) {
  return num1 + num2
}

const funcWithCallback = (
  num1: number,
  num2: number,
  cb: (num1: number, num2: number) => number
) => cb(num1, num2)

funcWithCallback(3, 5, add)