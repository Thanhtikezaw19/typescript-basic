let username = "admin"

let aUnion: string | number = 5
//aUnion = 1

// narrowing down the types when aUnion can be string or number
if (typeof (aUnion) === "number") {
}
if (aUnion) {
  if(typeof (aUnion === "string"))
  aUnion.split(",")
}
if (aUnion >= 5) {
}



///// literal

let newStatus: "PENDING" | "PROCESSING" | 4 = "PENDING"
newStatus = "ANC"



/// Union focus on Types and Literal focus on values