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
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // for 失敗
  // for (let i = 0; i < days.length - 1; i++) {
  //   if (day === days[i]) {
  //     return console.log(days[i]);
  //   }
  // }

  // if
  // if (day === 0) {
  //   return console.log(days[0]);
  // } else if (day === 1) {
  //   return console.log(days[1]);
  // } else if (day === 2) {
  //   return console.log(days[2]);
  // } else if (day === 3) {
  //   return console.log(days[3]);
  // } else if (day === 4) {
  //   return console.log(days[4]);
  // } else if (day === 5) {
  //   return console.log(days[5]);
  // } else if (day === 6) {
  //   return console.log(days[6]);
  // }

  // switch
  switch (day) {
    case 0:
      console.log(days[0]);
      break;
    case 1:
      console.log(days[1]);
      break;
    case 2:
      console.log(days[2]);
      break;
    case 3:
      console.log(days[3]);
      break;
    case 4:
      console.log(days[4]);
      break;
    case 5:
      console.log(days[5]);
      break;
    case 6:
      console.log(days[6]);
      break;
  }
}

module.exports = {
  printMessageByAge,
  greeding,
  getDay,
};
