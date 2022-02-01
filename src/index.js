// const js = {
//   body: {
//     children: {
//       h1: {
//         textContent: "Hello",
//         styles: ["color: red"],
//       },
//       ul: {
//         classList: [],
//         children: []
//           li1: {
//             children: {
//               a: {
//                 textContent: 11111111111,
//                 href: "https://"
//               },
//             },
//           },
//           li2: {},
//         },
//       },
//     },
//   },
// };

// const list = {
//   id: ""
// }

// const list = document.querySelector(".list");

// const listElements = list.querySelectorAll("li");

// listElements.forEach((li) => li.classList.add("test"));

// const courseForm = document.querySelector('[name="courseForm"]');
// console.log(courseForm);

// console.dir(document);
// const courseForm = document.forms.courseForm;
// console.dir(courseForm);

// console.dir(courseForm.submitButton);
// courseForm.clearButton.textContent = "Clear form";

// const courseForm = document.forms.courseForm;
// courseForm.courseName.value = "Hello";

// courseForm.term.checked = false;

// // const pict = document.querySelector(".img");
// // confirm("OK");
// // pict.src = path;

// console.log(courseForm.classList.toggle("testClass"));
// console.log(courseForm.classList.toggle("testClass"));

// const h1 = document.createElement("h1");
// h1.textContent = "Hello my element";

// document.querySelector("body").prepend(h1);

// document.forms.courseForm.courseName.before(h1);

// const list = document.querySelector("ul");

// const fragment = document.createDocumentFragment();

// for (let i = 1; i <= 4; i += 1) {
//   const listItem = document.createElement("li");
//   listItem.textContent = i;
//   fragment.appendChild(listItem);
// }

// list.appendChild(fragment);

// ===================
// document.createDocumentFragment

// ===========================

const arr = [1, 2, 3, 4, 5, 6];

const listItemMarkup = (content) => `<li class="fgjhk">${content}</li>`;

const listMurkup = (arr) => {
  return arr.reduce((acc, item) => {
    acc += listItemMarkup(item);
    return acc;
  }, "");
};

const markup = listMurkup(arr);
console.log(markup);

const list = document.querySelector(".pagination");
list.innerHTML = markup;

list.insertAdjacentHTML("afterbegin", listItemMarkup(7));
