import schoology from "../data/data.js";




const renameCourse = (newName, id) => {
  //('html', '4568787')
  schoology.courses = schoology.courses.map((course) =>
    course.id === id ? { ...course, name: newName } : course
  );
};



const addCourseVideo = (id, video) => {
  schoology.courses = schoology.courses.map((course) =>
    course.id === id ? { ...course, materials: { video } } : course
  );
};



const coursesServices = {

  renameCourse,
  addCourseVideo,
};
export default coursesServices;
// export { addCourse, removeCourse, renameCourse };
