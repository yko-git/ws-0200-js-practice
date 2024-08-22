/**
 *  2.1 引数から与えられた値が20以上であれば
 *    "成年です。"
 *    それ以外は "未成年です。”
 *    と出力するメソッドを実装してください
 *
 */
function printMessageByAge(age) {
  return console.log(age >= 20 ? "成年です。" : "未成年です。");
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
 *  2.3 引数から与えられた数字に対応する曜日を出力するメソッドを実装します。
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
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  days.forEach((value, index) => {
    if (day === index) {
      return console.log(value);
    }
  });
}

module.exports = {
  printMessageByAge,
  greeding,
  getDay,
};
