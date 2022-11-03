
let input_list = [
  document.getElementById("username_login"),
  document.getElementById("password_login"),
];

input_list.forEach((elements) => {
  elements.addEventListener("input", () => {
    if (
      // Input value:- the input given by the user like if user will type hello the value = hello
      document.getElementById("username_login").value != "" &&
      document.getElementById("password_login").value != ""
    ) {
      document.getElementById("btn_login").style.opacity = "1";
    } else {
      document.getElementById("btn_login").style.opacity = "0.5";
    }
  });
});

document.addEventListener("keypress", (e) => {
  // Shorcut key e will tell which key is pressed
  if (e.shiftKey && e.key === 'D') {
    document.querySelector("html").classList.toggle("dark"); //queryselector is use to select tag like getelementbyid to select the id 
    // Now here classlist to see the all the class of that tag toggle to toggle the class(here dark) turn on or off
  }
});

document.getElementById("join_log").addEventListener("click", () => {
  document.querySelector("title").innerHTML = "JOIN US";
  // HTML_ELEMENT.setAttribute("attribute name", "value");
  document.getElementById("login_box").setAttribute("class", "none");
  document.getElementById("join_box").setAttribute("class", "flex center cols white md-radius shadow");
});

document.getElementById("log_join").addEventListener("click", () => {
  document.querySelector("title").innerHTML = "BO E COMMERCE - LOGIN";
  document.getElementById("join_box").setAttribute("class", "none");
  document.getElementById("login_box").setAttribute("class", "flex center cols white md-radius shadow");
});

let input_list_join = [
  document.getElementById("username_join"),
  document.getElementById("name_join"),
  document.getElementById("email_join"),
  document.getElementById("password_join"),
  document.getElementById("password_joinr"),
];

input_list_join.forEach((elements) => {
  elements.addEventListener("input", () => {
    let r = -3;
    input_list_join.forEach((elements) => {
      if (elements.value != "") {
        r += 1;
      } else {
        r -= 1;
      }
    });
    if (r > 0) {
      document.getElementById("btn_join").style.opacity = "1";
    } else {
      document.getElementById("btn_join").style.opacity = "0.5";
    }
  });
});

let join_btn = (info) => {
  if (info.value != "") {
    // change the css(here opacity property) to 1
    document.getElementById("btn_join").style.opacity = "1";
  } else {
    document.getElementById("btn_join").style.opacity = "0.5";
  }
};

let psj = false;

document.getElementById("password_see_join").addEventListener("click", () => {
  if (psj == false) {
    document.getElementById("password_join").setAttribute("type", "text");
    document.getElementById("password_joinr").setAttribute("type", "text");
    document.getElementById("password_see_join").innerHTML =
      "Hide the password";
    psj = true;
  } else {
    document.getElementById("password_join").setAttribute("type", "password");
    document.getElementById("password_joinr").setAttribute("type", "password");
    document.getElementById("password_see_join").innerHTML =
      "Show the password";
    psj = false;
  }
});

let psl = false;

document.getElementById("password_see_login").addEventListener("click", () => {
  if (psl == false) {
    document.getElementById("password_login").setAttribute("type", "text");
    document.getElementById("password_see_login").innerHTML =
      "Hide the password";
    psl = true;
  } else {
    document.getElementById("password_login").setAttribute("type", "password");
    document.getElementById("password_see_login").innerHTML =
      "Show the password";
    psl = false;
  }
});
