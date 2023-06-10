class CustomError extends Error {
  constructor(Error) {
    super(Error);
  }
}
//find this info week 7 and 8 files for the try catch finally and all of the other "super"
function throwGenericError() {
  throw new Error("Generic error");
}

function throwCustomError() {
  throw new CustomError("Custom Error");
}

console.log("Force Generic Error");

try {
    //throwGenericError();
  console.log("Generic Error Try Block");
  throwGenericError();
} catch (err) {
  console.log("Generic Error Catch block");
  console.log("Error:", err.message);
} finally {
  console.log("Generic Error Finally Block");
}
console.log("Force Custom Error");

try {
  throwCustomError();
} catch (err) {
    console.log("Custom Error Catch Block")
  console.log("custom error:",err.message);
} finally {
  console.log("Custom Error Finally Block");
}


