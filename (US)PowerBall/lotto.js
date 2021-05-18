var location0 = document.querySelector(".select0");
location0.addEventListener("click", function () {
  window.location = "index.html";
});

var location1 = document.querySelector(".select1");
location1.addEventListener("click", function () {
  window.location = "1.html";
});

var location2 = document.querySelector(".select2");
location2.addEventListener("click", function () {
  window.location = "2.html";
});

var location3 = document.querySelector(".select3");
location3.addEventListener("click", function () {
  window.location = "3.html";
});

var location4 = document.querySelector(".select4");
location4.addEventListener("click", function () {
  window.location = "4.html";
});

var check_web_lotto_number = document.querySelector(".week_number");
check_web_lotto_number.addEventListener("click", function () {
  window.open("https://www.powerball.com/");
});

const GoPlayGoogle = document.querySelector(".PlayGoogle");
GoPlayGoogle.addEventListener("click", function () {
  window.open(
    "https://play.google.com/store/apps/details?id=com.moowang.ailotto"
  );
});

var LOTTO = document.getElementById("LOTTO");

function getBallNo() {
  let random = Math.floor(Math.random() * 69) + 1;
  return random;
}

function getPowerBallNo() {
  let random = Math.floor(Math.random() * 26) + 1;
  return random;
}

function getNumbers() {
  var numbers = [];
  while (numbers.length < 5) {
    //행 갯수 결정
    var newNumber = getBallNo();
    if (numbers.indexOf(newNumber) < 0) {
      numbers.push(newNumber);
    }
  }
  newNumber = getPowerBallNo();
  numbers.push(newNumber);
  return numbers;
}

//과거 회차 번호이용해서 5자리 뽑는 코드
function getBallNo_PastUse() {
  var Past = Math.floor(Math.random() * 15) + 1;
  Past = Number(Past);
  var PastNo = Lotto_Ranking[Past];
  return PastNo;
}

function getBallNo_Origin() {
  var numbers = [];
  var test = Math.floor(3 * Math.random()) + 2;
  while (numbers.length < test) {
    var newNumber = getBallNo();
    if (numbers.indexOf(newNumber) < 0) {
      numbers.push(newNumber);
    }
  }
  return numbers;
}
//

function getPowerBallNo_Origin() {
  let random = Math.floor(Math.random() * 26) + 1;
  return random;
}

function getNumbers_Through_PastUse() {
  var numbers = getBallNo_Origin();
  var rest = 5 - numbers.length;
  var i = 0;
  while (i < rest) {
    // 이부분이 문제가 있거나
    var newNumber = getBallNo_PastUse(); //이 함수가 재대로 작동은 안한다거나
    if (numbers.indexOf(newNumber) < 0) {
      numbers.push(newNumber);
      i++;
    }
  }
  newNumber = getPowerBallNo_Origin();
  numbers.push(newNumber);
  return numbers;
}

function checkLogic(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    var no = numbers[i];
    if (numbers.indexOf(no + 1) >= 0 && numbers.indexOf(no + 2) >= 0)
      return true;
  }
  return false;
}

function Standard_Deviation(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) total += numbers[i];
  var mean = total / numbers.length;
  total = 0;
  for (var i = 0; i < numbers.length; i++) {
    var deviation = numbers[i] - mean;
    total += deviation * deviation;
  }
  var stddev = Math.sqrt(total / numbers.length);
  if (10 <= stddev && stddev <= 15) {
    return true;
  }
  return false;
}

function Lotto_Sum(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  if (96 <= total && total <= 175) {
    return true;
  }
  return false;
}

function addClass() {
  document.querySelector(".loading").className = "loader";
}

function removeClass() {
  document.querySelector(".loader").className = "loading";
}

var Lotto_Ranking = [
  34, 27, 43, 18, 17, 39, 12, 13, 40, 14, 20, 45, 53, 57, 69, 61,
];

function genLottoHTML_Select1() {
  var LOTTO = document.getElementById("LOTTO");
  LOTTO.innerHTML = "";
  var lottoHTML = "";
  alert(
    `Press the OK button to generate a total of 5 PowerBall numbers. (Expected wait time: 0.4 to 0.5 seconds)`
  );
  addClass();
  setTimeout(function () {
    var numbers = getNumbers();
    lottoHTML += '<div class="numset"><span class="number">';
    lottoHTML += numbers.join('</span> <span class="number">');
    lottoHTML += "</span></div>";
    LOTTO.innerHTML = lottoHTML;
    setTimeout(function () {
      var numbers = getNumbers();
      lottoHTML += '<div class="numset"><span class="number">';
      lottoHTML += numbers.join('</span> <span class="number">');
      lottoHTML += "</span></div>";
      LOTTO.innerHTML = lottoHTML;
      setTimeout(function () {
        var numbers = getNumbers();
        lottoHTML += '<div class="numset"><span class="number">';
        lottoHTML += numbers.join('</span> <span class="number">');
        lottoHTML += "</span></div>";
        LOTTO.innerHTML = lottoHTML;
        setTimeout(function () {
          var numbers = getNumbers();
          lottoHTML += '<div class="numset"><span class="number">';
          lottoHTML += numbers.join('</span> <span class="number">');
          lottoHTML += "</span></div>";
          LOTTO.innerHTML = lottoHTML;
          setTimeout(function () {
            var numbers = getNumbers();
            lottoHTML += '<div class="numset"><span class="number">';
            lottoHTML += numbers.join('</span> <span class="number">');
            lottoHTML += "</span></div>";
            LOTTO.innerHTML = lottoHTML;
            removeClass();
            setTimeout(function () {
              alert("Complete!");
            }, 100);
          }, 68);
        }, 150);
      }, 178);
    }, 300);
  }, 98);
}

function genLottoHTML_Select2() {
  var LOTTO = document.getElementById("LOTTO");
  LOTTO.innerHTML = "";
  var lottoHTML = "";
  alert(
    `Press the OK button, all but the number of PowerBall numbers that contain at least three consecutive numbers is excluded. (Expected wait time: 4 to 5 seconds)`
  );
  addClass();
  setTimeout(function () {
    var numbers = getNumbers();
    while (checkLogic(numbers)) {
      numbers = getNumbers();
    }
    lottoHTML += '<div class="numset"><span class="number">';
    lottoHTML += numbers.join('</span> <span class="number">');
    lottoHTML += "</span></div>";
    LOTTO.innerHTML = lottoHTML;
    setTimeout(function () {
      var numbers = getNumbers();
      while (checkLogic(numbers)) {
        numbers = getNumbers();
      }
      lottoHTML += '<div class="numset"><span class="number">';
      lottoHTML += numbers.join('</span> <span class="number">');
      lottoHTML += "</span></div>";
      LOTTO.innerHTML = lottoHTML;
      setTimeout(function () {
        var numbers = getNumbers();
        while (checkLogic(numbers)) {
          numbers = getNumbers();
        }
        lottoHTML += '<div class="numset"><span class="number">';
        lottoHTML += numbers.join('</span> <span class="number">');
        lottoHTML += "</span></div>";
        LOTTO.innerHTML = lottoHTML;
        setTimeout(function () {
          var numbers = getNumbers();
          while (checkLogic(numbers)) {
            numbers = getNumbers();
          }
          lottoHTML += '<div class="numset"><span class="number">';
          lottoHTML += numbers.join('</span> <span class="number">');
          lottoHTML += "</span></div>";
          LOTTO.innerHTML = lottoHTML;
          setTimeout(function () {
            var numbers = getNumbers();
            while (checkLogic(numbers)) {
              numbers = getNumbers();
            }
            lottoHTML += '<div class="numset"><span class="number">';
            lottoHTML += numbers.join('</span> <span class="number">');
            lottoHTML += "</span></div>";
            LOTTO.innerHTML = lottoHTML;
            removeClass();
            setTimeout(function () {
              alert("Complete!");
            }, 100);
          }, 1031);
        }, 1230);
      }, 1209);
    }, 939);
  }, 1260);
}

function genLottoHTML_Select3() {
  var LOTTO = document.getElementById("LOTTO");
  LOTTO.innerHTML = "";
  var lottoHTML = "";
  alert(
    `press the OK button, you create 5 PowerBall numbers that satisfy all the conditions of the first, second, and third. (Expected wait time: 15-17 seconds)`
  );
  addClass();
  setTimeout(function () {
    var Selector = true;
    var numbers = getNumbers();
    while (Selector) {
      if (
        !checkLogic(numbers) === true &&
        Standard_Deviation(numbers) === true &&
        Lotto_Sum(numbers) === true
      ) {
        Selector = false;
      } else {
        numbers = getNumbers();
        Selector = true;
      }
    }
    lottoHTML += '<div class="numset"><span class="number">';
    lottoHTML += numbers.join('</span> <span class="number">');
    lottoHTML += "</span></div>";
    LOTTO.innerHTML = lottoHTML;
    setTimeout(function () {
      var Selector = true;
      var numbers = getNumbers();
      while (Selector) {
        if (
          !checkLogic(numbers) === true &&
          Standard_Deviation(numbers) === true &&
          Lotto_Sum(numbers) === true
        ) {
          Selector = false;
        } else {
          numbers = getNumbers();
          Selector = true;
        }
      }
      lottoHTML += '<div class="numset"><span class="number">';
      lottoHTML += numbers.join('</span> <span class="number">');
      lottoHTML += "</span></div>";
      LOTTO.innerHTML = lottoHTML;
      setTimeout(function () {
        var Selector = true;
        var numbers = getNumbers();
        while (Selector) {
          if (
            !checkLogic(numbers) === true &&
            Standard_Deviation(numbers) === true &&
            Lotto_Sum(numbers) === true
          ) {
            Selector = false;
          } else {
            numbers = getNumbers();
            Selector = true;
          }
        }
        lottoHTML += '<div class="numset"><span class="number">';
        lottoHTML += numbers.join('</span> <span class="number">');
        lottoHTML += "</span></div>";
        LOTTO.innerHTML = lottoHTML;
        setTimeout(function () {
          var Selector = true;
          var numbers = getNumbers();
          while (Selector) {
            if (
              !checkLogic(numbers) === true &&
              Standard_Deviation(numbers) === true &&
              Lotto_Sum(numbers) === true
            ) {
              Selector = false;
            } else {
              numbers = getNumbers();
              Selector = true;
            }
          }
          lottoHTML += '<div class="numset"><span class="number">';
          lottoHTML += numbers.join('</span> <span class="number">');
          lottoHTML += "</span></div>";
          LOTTO.innerHTML = lottoHTML;
          setTimeout(function () {
            var Selector = true;
            var numbers = getNumbers();
            while (Selector) {
              if (
                !checkLogic(numbers) === true &&
                Standard_Deviation(numbers) === true &&
                Lotto_Sum(numbers) === true
              ) {
                Selector = false;
              } else {
                numbers = getNumbers();
                Selector = true;
              }
            }
            lottoHTML += '<div class="numset"><span class="number">';
            lottoHTML += numbers.join('</span> <span class="number">');
            lottoHTML += "</span></div>";
            LOTTO.innerHTML = lottoHTML;
            removeClass();
            setTimeout(function () {
              alert("Complete!");
            }, 100);
          }, 3000);
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
}

function genLottoHTML_Select4() {
  var LOTTO = document.getElementById("LOTTO");
  LOTTO.innerHTML = "";
  var lottoHTML = "";
  alert(
    `Press the confirmation button, AI analyzes the data and draws the PowerBall number. (Expected wait time: 24 to 26 seconds)`
  );
  addClass();
  setTimeout(function () {
    var Selector = true;
    var numbers = getNumbers_Through_PastUse();
    while (Selector) {
      if (
        !checkLogic(numbers) === true &&
        Standard_Deviation(numbers) === true &&
        Lotto_Sum(numbers) === true
      ) {
        Selector = false;
      } else {
        numbers = getNumbers_Through_PastUse();
        Selector = true;
      }
    }

    lottoHTML += '<div class="numset"><span class="number">';
    lottoHTML += numbers.join('</span> <span class="number">');
    lottoHTML += "</span></div>";
    LOTTO.innerHTML = lottoHTML;
    setTimeout(function () {
      var Selector = true;
      var numbers = getNumbers_Through_PastUse();
      while (Selector) {
        if (
          !checkLogic(numbers) === true &&
          Standard_Deviation(numbers) === true &&
          Lotto_Sum(numbers) === true
        ) {
          Selector = false;
        } else {
          numbers = getNumbers_Through_PastUse();
          Selector = true;
        }
      }

      lottoHTML += '<div class="numset"><span class="number">';
      lottoHTML += numbers.join('</span> <span class="number">');
      lottoHTML += "</span></div>";
      LOTTO.innerHTML = lottoHTML;
      setTimeout(function () {
        var Selector = true;
        var numbers = getNumbers_Through_PastUse();
        while (Selector) {
          if (
            !checkLogic(numbers) === true &&
            Standard_Deviation(numbers) === true &&
            Lotto_Sum(numbers) === true
          ) {
            Selector = false;
          } else {
            numbers = getNumbers_Through_PastUse();
            Selector = true;
          }
        }

        lottoHTML += '<div class="numset"><span class="number">';
        lottoHTML += numbers.join('</span> <span class="number">');
        lottoHTML += "</span></div>";
        LOTTO.innerHTML = lottoHTML;
        setTimeout(function () {
          var Selector = true;
          var numbers = getNumbers_Through_PastUse();
          while (Selector) {
            if (
              !checkLogic(numbers) === true &&
              Standard_Deviation(numbers) === true &&
              Lotto_Sum(numbers) === true
            ) {
              Selector = false;
            } else {
              numbers = getNumbers_Through_PastUse();
              Selector = true;
            }
          }

          lottoHTML += '<div class="numset"><span class="number">';
          lottoHTML += numbers.join('</span> <span class="number">');
          lottoHTML += "</span></div>";
          LOTTO.innerHTML = lottoHTML;
          setTimeout(function () {
            var Selector = true;
            var numbers = getNumbers_Through_PastUse();
            while (Selector) {
              if (
                !checkLogic(numbers) === true &&
                Standard_Deviation(numbers) === true &&
                Lotto_Sum(numbers) === true
              ) {
                Selector = false;
              } else {
                numbers = getNumbers_Through_PastUse();
                Selector = true;
              }
            }

            lottoHTML += '<div class="numset"><span class="number">';
            lottoHTML += numbers.join('</span> <span class="number">');
            lottoHTML += "</span></div>";
            LOTTO.innerHTML = lottoHTML;
            removeClass();
            setTimeout(function () {
              alert("Complete!");
            }, 100);
          }, 5150);
        }, 5150);
      }, 5150);
    }, 5150);
  }, 5150);
}

// var keydownCtrl = 0;
// var keydownShift = 0;

// document.onkeydown = keycheck;
// document.onkeyup = uncheckCtrlShift;

// function keycheck() {
//   switch (event.keyCode) {
//     case 123:
//       event.keyCode = "";
//       return false;
//       break;

//     case 17:
//       event.keyCode = "";
//       keydownCtrl = 1;
//       return false;
//       break;
//   }
//   if (keydownCtrl) return false;
// }

// function uncheckCtrlShift() {
//   if (event.keyCode == 17) keydownCtrl = 0;
//   if (event.keyCode == 16) keydownShift = 0;
// }

// function click() {
//   if (event.button == 2 && event.button == 2) {
//     alert("ACESS Deined");
//   }
// }

// document.onmousedown = click;
