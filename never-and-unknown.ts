//shouldn't use frequently (like any type but different)
let anUnknown: unknown

anUnknown = "Hello"
anUnknown = 1

//never (dead end like throwing exception and fail, and no return)

function doSomething() : never {
  throw new Error()
}