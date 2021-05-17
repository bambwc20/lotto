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

function genLottoNo() {
  var random = Math.floor(Math.random() * 45) + 1;
  return random;
}

function getLuckyNumber() {
  var numbers = [];
  while (numbers.length < 6) {
    //행 갯수 결정
    var newNumber = genLottoNo();
    if (numbers.indexOf(newNumber) < 0) {
      numbers.push(newNumber);
    }
  }
  return numbers;
}

function PastLottoNo() {
  var Past = Math.floor(Math.random() * 11) + 1;
  Past = Number(Past);
  var PastNo = Lotto_Ranking[Past];
  return PastNo;
}

function getLuckyNumber_Origin() {
  var numbers = [];
  var test = Math.floor(3 * Math.random()) + 3;
  while (numbers.length < test) {
    var newNumber = genLottoNo();
    if (numbers.indexOf(newNumber) < 0) {
      numbers.push(newNumber);
    }
  }
  return numbers;
}

function getLuckyNumber_PastUse() {
  var numbers = getLuckyNumber_Origin();
  var rest = 6 - numbers.length;
  var i = 0;
  while (i < rest) {
    // 이부분이 문제가 있거나
    var newNumber = PastLottoNo(); //이 함수가 재대로 작동은 안한다거나
    if (numbers.indexOf(newNumber) < 0) {
      numbers.push(newNumber);
      i++;
    }
  }
  return numbers;
}

function checkLogic(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    var no = numbers[i];
    if (numbers.indexOf(no + 1) >= 0 && numbers.indexOf(no + 2) >= 0)
      return false;
  }
  return true;
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

var Lotto_Ranking = [34, 27, 43, 18, 17, 39, 12, 13, 40, 14, 20, 45];

function genLottoHTML_Select1() {
  var LOTTO = document.getElementById("LOTTO");
  LOTTO.innerHTML = "";
  var lottoHTML = "";
  alert(
    `확인 버튼을 누르면 총 5개의 로또번호를 생성합니다. (예상 대기 시간: 0.4~0.5초)`
  );
  addClass();
  setTimeout(function () {
    var numbers = getLuckyNumber();
    lottoHTML += '<div class="numset"><span class="number">';
    lottoHTML += numbers.join('</span> <span class="number">');
    lottoHTML += "</span></div>";
    LOTTO.innerHTML = lottoHTML;
    setTimeout(function () {
      var numbers = getLuckyNumber();
      lottoHTML += '<div class="numset"><span class="number">';
      lottoHTML += numbers.join('</span> <span class="number">');
      lottoHTML += "</span></div>";
      LOTTO.innerHTML = lottoHTML;
      setTimeout(function () {
        var numbers = getLuckyNumber();
        lottoHTML += '<div class="numset"><span class="number">';
        lottoHTML += numbers.join('</span> <span class="number">');
        lottoHTML += "</span></div>";
        LOTTO.innerHTML = lottoHTML;
        setTimeout(function () {
          var numbers = getLuckyNumber();
          lottoHTML += '<div class="numset"><span class="number">';
          lottoHTML += numbers.join('</span> <span class="number">');
          lottoHTML += "</span></div>";
          LOTTO.innerHTML = lottoHTML;
          setTimeout(function () {
            var numbers = getLuckyNumber();
            lottoHTML += '<div class="numset"><span class="number">';
            lottoHTML += numbers.join('</span> <span class="number">');
            lottoHTML += "</span></div>";
            LOTTO.innerHTML = lottoHTML;
            removeClass();
            setTimeout(function () {
              alert("완료하였습니다.");
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
    `확인 버튼을 누르면 연속된 숫자가 3개 이상 포함되어 있는 로또 번호의 경우의 수를 모두 제외한 후, 총 5개의 로또번호를 생성합니다. (예상 대기 시간: 4~5초)`
  );
  addClass();
  setTimeout(function () {
    var numbers = getLuckyNumber();
    while (checkLogic(numbers)) {
      numbers = getLuckyNumber();
    }
    lottoHTML += '<div class="numset"><span class="number">';
    lottoHTML += numbers.join('</span> <span class="number">');
    lottoHTML += "</span></div>";
    LOTTO.innerHTML = lottoHTML;
    setTimeout(function () {
      var numbers = getLuckyNumber();
      while (checkLogic(numbers)) {
        numbers = getLuckyNumber();
      }
      lottoHTML += '<div class="numset"><span class="number">';
      lottoHTML += numbers.join('</span> <span class="number">');
      lottoHTML += "</span></div>";
      LOTTO.innerHTML = lottoHTML;
      setTimeout(function () {
        var numbers = getLuckyNumber();
        while (checkLogic(numbers)) {
          numbers = getLuckyNumber();
        }
        lottoHTML += '<div class="numset"><span class="number">';
        lottoHTML += numbers.join('</span> <span class="number">');
        lottoHTML += "</span></div>";
        LOTTO.innerHTML = lottoHTML;
        setTimeout(function () {
          var numbers = getLuckyNumber();
          while (checkLogic(numbers)) {
            numbers = getLuckyNumber();
          }
          lottoHTML += '<div class="numset"><span class="number">';
          lottoHTML += numbers.join('</span> <span class="number">');
          lottoHTML += "</span></div>";
          LOTTO.innerHTML = lottoHTML;
          setTimeout(function () {
            var numbers = getLuckyNumber();
            while (checkLogic(numbers)) {
              numbers = getLuckyNumber();
            }
            lottoHTML += '<div class="numset"><span class="number">';
            lottoHTML += numbers.join('</span> <span class="number">');
            lottoHTML += "</span></div>";
            LOTTO.innerHTML = lottoHTML;
            removeClass();
            setTimeout(function () {
              alert("완료하였습니다.");
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
    `확인 버튼을 누르면 첫째, 둘째, 셋째의 조건들을 전부 만족하는 로또 번호 5개를 생성합니다. (예상 대기 시간: 15~17초)`
  );
  addClass();
  setTimeout(function () {
    var Selector = true;
    var numbers = getLuckyNumber();
    while (Selector) {
      if (
        checkLogic(numbers) &&
        Standard_Deviation(numbers) &&
        Lotto_Sum(numbers)
      ) {
        Selector = false;
      } else {
        numbers = getLuckyNumber();
        Selector = true;
      }
    }
    lottoHTML += '<div class="numset"><span class="number">';
    lottoHTML += numbers.join('</span> <span class="number">');
    lottoHTML += "</span></div>";
    LOTTO.innerHTML = lottoHTML;
    setTimeout(function () {
      var Selector = true;
      var numbers = getLuckyNumber();
      while (Selector) {
        if (
          checkLogic(numbers) &&
          Standard_Deviation(numbers) &&
          Lotto_Sum(numbers)
        ) {
          Selector = false;
        } else {
          numbers = getLuckyNumber();
          Selector = true;
        }
      }
      lottoHTML += '<div class="numset"><span class="number">';
      lottoHTML += numbers.join('</span> <span class="number">');
      lottoHTML += "</span></div>";
      LOTTO.innerHTML = lottoHTML;
      setTimeout(function () {
        var Selector = true;
        var numbers = getLuckyNumber();
        while (Selector) {
          if (
            checkLogic(numbers) &&
            Standard_Deviation(numbers) &&
            Lotto_Sum(numbers)
          ) {
            Selector = false;
          } else {
            numbers = getLuckyNumber();
            Selector = true;
          }
        }
        lottoHTML += '<div class="numset"><span class="number">';
        lottoHTML += numbers.join('</span> <span class="number">');
        lottoHTML += "</span></div>";
        LOTTO.innerHTML = lottoHTML;
        setTimeout(function () {
          var Selector = true;
          var numbers = getLuckyNumber();
          while (Selector) {
            if (
              checkLogic(numbers) &&
              Standard_Deviation(numbers) &&
              Lotto_Sum(numbers)
            ) {
              Selector = false;
            } else {
              numbers = getLuckyNumber();
              Selector = true;
            }
          }
          lottoHTML += '<div class="numset"><span class="number">';
          lottoHTML += numbers.join('</span> <span class="number">');
          lottoHTML += "</span></div>";
          LOTTO.innerHTML = lottoHTML;
          setTimeout(function () {
            var Selector = true;
            var numbers = getLuckyNumber();
            while (Selector) {
              if (
                checkLogic(numbers) &&
                Standard_Deviation(numbers) &&
                Lotto_Sum(numbers)
              ) {
                Selector = false;
              } else {
                numbers = getLuckyNumber();
                Selector = true;
              }
            }
            lottoHTML += '<div class="numset"><span class="number">';
            lottoHTML += numbers.join('</span> <span class="number">');
            lottoHTML += "</span></div>";
            LOTTO.innerHTML = lottoHTML;
            removeClass();
            setTimeout(function () {
              alert("완료하였습니다.");
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
    `확인 버튼을 누르면 AI가 데이터를 분석하고 로또 번호를 추첨해줍니다. (예상 대기 시간: 14~16초)`
  );
  addClass();
  setTimeout(function () {
    var Selector = true;
    var numbers = getLuckyNumber();
    while (Selector) {
      if (
        checkLogic(numbers) &&
        Standard_Deviation(numbers) &&
        Lotto_Sum(numbers)
      ) {
        Selector = false;
      } else {
        numbers = getLuckyNumber_PastUse();
        Selector = true;
      }
    }

    lottoHTML += '<div class="numset"><span class="number">';
    lottoHTML += numbers.join('</span> <span class="number">');
    lottoHTML += "</span></div>";
    LOTTO.innerHTML = lottoHTML;
    setTimeout(function () {
      var Selector = true;
      var numbers = getLuckyNumber();
      while (Selector) {
        if (
          checkLogic(numbers) &&
          Standard_Deviation(numbers) &&
          Lotto_Sum(numbers)
        ) {
          Selector = false;
        } else {
          numbers = getLuckyNumber_PastUse();
          Selector = true;
        }
      }

      lottoHTML += '<div class="numset"><span class="number">';
      lottoHTML += numbers.join('</span> <span class="number">');
      lottoHTML += "</span></div>";
      LOTTO.innerHTML = lottoHTML;
      setTimeout(function () {
        var Selector = true;
        var numbers = getLuckyNumber();
        while (Selector) {
          if (
            checkLogic(numbers) &&
            Standard_Deviation(numbers) &&
            Lotto_Sum(numbers)
          ) {
            Selector = false;
          } else {
            numbers = getLuckyNumber_PastUse();
            Selector = true;
          }
        }

        lottoHTML += '<div class="numset"><span class="number">';
        lottoHTML += numbers.join('</span> <span class="number">');
        lottoHTML += "</span></div>";
        LOTTO.innerHTML = lottoHTML;
        setTimeout(function () {
          var Selector = true;
          var numbers = getLuckyNumber();
          while (Selector) {
            if (
              checkLogic(numbers) &&
              Standard_Deviation(numbers) &&
              Lotto_Sum(numbers)
            ) {
              Selector = false;
            } else {
              numbers = getLuckyNumber_PastUse();
              Selector = true;
            }
          }

          lottoHTML += '<div class="numset"><span class="number">';
          lottoHTML += numbers.join('</span> <span class="number">');
          lottoHTML += "</span></div>";
          LOTTO.innerHTML = lottoHTML;
          setTimeout(function () {
            var Selector = true;
            var numbers = getLuckyNumber();
            while (Selector) {
              if (
                checkLogic(numbers) &&
                Standard_Deviation(numbers) &&
                Lotto_Sum(numbers)
              ) {
                Selector = false;
              } else {
                numbers = getLuckyNumber_PastUse();
                Selector = true;
              }
            }

            lottoHTML += '<div class="numset"><span class="number">';
            lottoHTML += numbers.join('</span> <span class="number">');
            lottoHTML += "</span></div>";
            LOTTO.innerHTML = lottoHTML;
            removeClass();
            setTimeout(function () {
              alert("완료하였습니다.");
            }, 100);
          }, 3150);
        }, 3150);
      }, 3150);
    }, 3150);
  }, 3150);
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
