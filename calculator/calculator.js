let par = document.getElementById("para")
let s = " "
function divide() {
    s += "/"
    par.textContent = s
}
function multiply() {
    s += "*"
    par.textContent = s
}
function addition() {
    s += "+"
    par.textContent = s
}
function subtract() {
    s += "-"
    par.textContent = s
}
function percen(){
    s+="%"
    par.textContent=s
}
function b9() {
    s += 9
    par.textContent = s
}
function b8() {
    s += 8
    par.textContent = s
}
function b7() {
    s += 7
    par.textContent = s
}
function b6() {
    s += 6
    par.textContent = s
}
function b5() {
    s += 5
    par.textContent = s
}
function b4() {
    s += 4
    par.textContent = s
}
function b3() {
    s += 3
    par.textContent = s
}
function b2() {
    s += 2
    par.textContent = s
}
function b1() {
    s += 1
    par.textContent = s
}
function b0() {
    s += 0
    par.textContent = s
}
function cl() {
    s=s.substring(0,s.length-1)
    par.textContent = s
}
const arr = []
const str = []
function equal() {
    // console.log(s)
    let a = s.length
    let st = ""
    let x = 0
    for (let i = 1; i < a; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            st = st + s[i]
        }
        else {
            arr[x++] = parseInt(st)
            st = ""
        }
    }
    arr[x++] = parseInt(st)
    st=""
    x = 0
    for (let i = 1; i < a; i++) {
        if (!(s[i] >= '0' && s[i] <= '9')) {
            str[x++] = s[i]
        }
    }
    // for(let i=0;i<arr.length;i++)
    // {
    //     console.log(arr[i])
    // }
    // for(let i=0;i<str.length;i++)
    // {
    //     console.log(str[i])
    // }
    let ans = arr[0]
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='+')
        {
            ans+=arr[i+1]
        }
        else if(str[i]=='-')
        {
            ans-=arr[i+1]
        }
        else if(str[i]=='/')
        {
            ans/=arr[i+1]
        }
        else if(str[i]=='*')
        {
            ans*=arr[i+1]
        }
        else
        {
            ans*=arr[i+1]
            ans/=100
        }
        // console.log(ans)
    }
    // ans=s+"="+ans
    par.textContent = ans
    s=" "
    s+=ans
    arr.length=0
    str.length=0
    // console.log(s)
}