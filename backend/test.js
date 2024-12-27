const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Can't divide by zero")
    }
    return a / b
}

// try {
//     divide(3, "x")
//     console.log("Inside the try")
// } catch(error) {
//     console.error(error.message)
//     console.log("Inside the catch")
// }

divide(3, 0)