// core types

let aNumber = 1
let aString = "HlaHla"
let aBoolean = true

let anObject = {
  name: "Hla Hla"
}

let anArray: string[] = [
  "a", "b"
]

// there is special array called tuple

const aTuple: [string, number] = ["a", 1] //fix length and sequential type


enum aEnum {
  PENDING, PROCESSING
}
aEnum.PENDING

//any

let number: any = "abc"
number = 1 // it works because `any` type and should't use


type Profile = {
  name: string,
  age: number
  address: string
}

const aProfile: Profile = {
  name: "Hla Hla",
  age: 23,
  address: "Bangkok"
}

