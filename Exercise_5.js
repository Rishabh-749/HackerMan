let left = () => {
  let a = document.getElementById('left')
  let b = document.getElementById('c')
  // console.log(a)
  a.style.backgroundImage = "url('Gif_1.gif')"
  console.log(!b.classList.contains("console"))
  Right()
  middle()
  b.innerHTML = ""
  CheckBox()
}

let Right = () => {
  let a = document.getElementById('right')
  console.log(a)
  a.style.backgroundImage = "url('Gif_1.gif')"
}

let middle = () => {
  let a = document.getElementById('c')
  // a.classList.add("console")
  a.className = "console"
}
let clock = () => {
  let a = document.getElementsByClassName('Clock')[0]

  setInterval(() => {
    let D = new Date()
    // let hour = D.getHours()
    // let min = D.getMinutes()
    // let sec = D.getSeconds()
    let fulltime = D.toLocaleTimeString()
    a.innerHTML = `${fulltime}`
  }, 1000)
}
clock()

let CheckBox = () => {
  let Name = document.getElementById('size').value
  let I = document.getElementById('Insta')
  let F = document.getElementById('Face')
  let W = document.getElementById('What')
  let a = document.getElementsByClassName('console')[0]
  let common
  let array = [
    "Initializing Hack Tool...",
    "Connecting to ",
    "Connecting to Server 1...",
    "Connection Failed. Retrying...",
    "Connecting to Server 2...",
    "Connection Successfully...",
    "Username ",
    "Trying Brute Force...",
    "Matching Password...",
    "200K Password Tried...",
    "Match Not Found...",
    "Another 200k Password Tried...",
    "Match Found...",
    "Accessing Account...",
    "Hack Successfull...."
  ]

  if (I.checked && F.checked && W.checked) {
    common = `${I.value}, ${F.value} and ${W.value}`
  }
  else if (I.checked && F.checked) {
    common = `${I.value} and ${F.value}`
  }
  else if (I.checked && W.checked) {
    common = `${I.value} and ${W.value}`
  }
  else if (F.checked && W.checked) {
    common = `${F.value} and ${W.value}`
  }

  else if (I.checked) {
    common = `${I.value}`
  }
  else if (F.checked) {
    common = `${F.value}`
  }
  else if (W.checked) {
    common = `${W.value}`
  }
  else {
    common = `Select anything to Hack`
  }

  const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, seconds * 1000)
    })
  }

  const ShowHack = async (message, i) => {
    await sleep(2)
    if (i == 1) {
      a.innerHTML = a.innerHTML + message + common + "<br>"
    }
    else if (i == 6) {
      a.innerHTML = a.innerHTML + message + Name + " Found" + "<br>"
    }
    else {
      a.innerHTML = a.innerHTML + message + "<br>"
    }
  }

  const msg = async () => {
    for (let i = 0; i < array.length; i++)
      await ShowHack(array[i], i)
  }

  if (!Name == "" || !common == "Select anything to Hack") {
    console.log("Hello QWefrnskjfnkjbh")
    msg()
  }
  else {
    a.innerHTML = "Enter you Name and Select what to hack"
  }

}
