//inputs
const sessionInp = document.getElementById("sessionInp")
const localInp = document.getElementById("localInp")
const coockiesInp = document.getElementById("coockiesInp")

//botoes
const saveSessionInfoBtn = document.getElementById("saveSessionInfo")
const showSessionInfoBtn = document.getElementById("showSessionInfo")

const saveLocalInfoBtn = document.getElementById("saveLocalInfo")
const showLocalInfoBtn = document.getElementById("showLocalInfo")

const saveCoockieInfoBtn = document.getElementById("saveCoockieInfo")
const showCoockieInfoBtn = document.getElementById("showCoockieInfo")


saveSessionInfoBtn.addEventListener("click", ()=>{
    const inpValue = sessionInp.value
    sessionStorage.setItem("sessiionInfo", inpValue)
    inpValue = ""
})

showSessionInfoBtn.addEventListener("click", ()=>{
    const savedValueSession = sessionStorage.getItem("sessiionInfo")

    alert(savedValueSession)
})


saveLocalInfoBtn.addEventListener("click", ()=>{
    localStorage.setItem("localInfo", localInp.value);
    localInp.value = ""
})
showLocalInfoBtn.addEventListener("click", ()=>alert(localStorage.getItem('localInfo')))


saveCoockieInfoBtn.addEventListener("click", ()=>{
    const newCoockie = `info= ${coockiesInp.value}; expires= 2024/09/23`
    document.cookie = newCoockie
    coockiesInp.value = ""
})