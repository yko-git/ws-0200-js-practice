/**
 *  2.1 引数から与えられた値が20以上であれば
 *    "成年です。"
 *    それ以外は "未成年です。”
 *    と出力するメソッドを実装してください
 *
 */
function printMessageByAge(age) {
  if (age >= 20) {
    return console.log("成年です。");
  } else {
    return console.log("未成年です。");
  }
}

/**
 *  2.2 引数から与えられた時間が
 *    4時から12時より前であれば、 Good Morning
 *    12時から17時より前であれば、 Hello
 *    17時以降であれば、 Good Night
 *    と出力するメソッドを実装してください
 *
 */
function greeding(hour) {
  if (hour >= 4 && hour <= 11) {
    return console.log("Good Morning");
  } else if (hour >= 12 && hour <= 16) {
    return console.log("Hello");
  } else if (hour >= 3 && hour <= 17) {
    return console.log("Good Night");
  }
}

/**
 *  2.3 引数から与えられた数字に対応する曜日を返却するメソッドを実装してください
 *    0 ・・・Sunday
 *    1 ・・・Monday
 *    2 ・・・Tuesday
 *    3 ・・・Wednesday
 *    4 ・・・Thursday
 *    5 ・・・Friday
 *    6 ・・・Saturday
 *    と出力するメソッドを実装してください
 *
 */

function getDay(day) {
  if (day === 0) {
    return console.log("Sunday");
  } else if (day === 1) {
    return console.log("Monday");
  } else if (day === 2) {
    return console.log("Tuesday");
  } else if (day === 3) {
    return console.log("Wednesday");
  } else if (day === 4) {
    return console.log("Thursday");
  } else if (day === 5) {
    return console.log("Friday");
  } else if (day === 6) {
    return console.log("Saturday");
  }
}

module.exports = {
  printMessageByAge,
  greeding,
  getDay,
};
