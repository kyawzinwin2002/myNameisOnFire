export const myName = "Kyaw Zin Win";
export const showMyName = () => {
    return myName;
}

export const showMyNameUi = () => {
    const h1 = document.createElement("h1")
    h1.innerText = myName;
    document.body.prepend(h1)
}

