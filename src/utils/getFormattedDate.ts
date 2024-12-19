import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/ka";
dayjs.extend(relativeTime);

// dayjs.locale("ka", {
//   relativeTime: {
//     future: "შემდეგ %s",
//     past: "%sს წინ",
//     s: "წამები",
//     m: "1 წუთი",
//     mm: "%d წუთი",
//     h: "1 საათი",
//     hh: "%d საათი",
//     d: "1 დღე",
//     dd: "%d დღე",
//   },
// });

export const getFormattedDate = (date: string) => {
  const dateNow = dayjs();
  const givenDate = dayjs(date);

  const hoursdifference = dateNow.diff(givenDate, "hours");

  if (date) {
    if (hoursdifference < 24) {
      return givenDate.from(dateNow);
    } else {
      return givenDate.format("DD/MM/YYYY - HH:mm");
    }
  }
  return "Date Not found";
};
