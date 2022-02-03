import commonServices from "./common/common.js";
import schoology from "./data/data.js";

const refs = {
  form: document.forms.courseForm,
  courseName: document.forms.courseForm.courseName,
  level: document.forms.courseForm.level,
  button: document.forms.courseForm.addButton,
  coursesList: document.querySelector(".coursesList"),
};

const course = {
  courseName: "",
  level: "easy",
  isOnline: false,
};

const createListItemMarkup = (course) => `
  <li class="coursesListItem">
    <h2>${course.courseName}</h2>
    <p>${course.level}</p>
    <button 
      type="button" 
      data-id=${course.id} 
      data-btn="deleteBtn">Delete</button>
    <button 
      type="button" 
      data-id=${course.id} 
      data-btn="changeBtn">Change</button>
  </li>
`;

const createListMarkup = (array) => {
  return array.reduce((acc, item) => {
    acc += createListItemMarkup(item);
    return acc;
  }, "");
};

const onHandleChange = (e) => {
  const { name, value } = e.target;
  course[name] = value;
};

const sendData = (e) => {
  e.preventDefault();
  const id = commonServices.addItem("courses", course);
  refs.coursesList.insertAdjacentHTML(
    "beforeend",
    createListItemMarkup({ ...course, id })
  );
};

refs.form.addEventListener("change", onHandleChange);
refs.button.addEventListener("click", sendData);
refs.coursesList.innerHTML = createListMarkup(schoology.courses);

const action = (e) => {
  if (e.target.dataset.btn === "deleteBtn") {
    commonServices.removeItem("courses", e.target.dataset.id);
    refs.coursesList.innerHTML = createListMarkup(schoology.courses);
  }
};

refs.coursesList.addEventListener("click", action);
