import commonServices from "./common/common.js";
import schoology from "./data/data.js";
import coursesServices from "./modules/courses.js";

const html = {
  name: "HTML_CSS",
};

const js = {
  name: "Java script",
};

const group = {
  name: "FE_46",
  studentsCount: 20,
};

// commonServices.renameItem("courses", "4568787", "https: //ghjhjjhjkhkjhjk");
// // commonServices.addItem("groups", group);
// // console.log(commonServices.getFieldItems("groups"));
// // commonServices.addItem("courses", html);
// console.log(commonServices.getFieldItems("courses"));

const str = "courses.materials.video";

// const res = str.split("."); // ["courses", "dfghkj", "cfghj"];

// =================================================

// const method = (path, id, value) => {
//   // schoology.courses.materials.video ="https://fghg"
//   const arr = path.split(".");
//   const length = arr.length;

//   const res = arr.reduce((acc, item) => {
//     // console.log(item);
//     // console.log(schoology[item]);
//     acc = schoology[item];
//     return acc;
//   }, schoology);
// };

// method(str, "https://fghg");

const arr = [
  [1, 2, 3],
  [4, [111, 22222, 344, 5556], 6],
  [7, 8, [9, 10, 11, [12, 13, 14]]],
];

const getValue = (arr) => {
  const getArrValue = (value) => {
    for (let i = 0; i < value.length; i += 1) {
      if (value[i].constructor.name === "Array") {
        getArrValue(value[i]);
      } else console.log(value[i]);
    }
  };
  getArrValue(arr);
};
getValue(arr);

