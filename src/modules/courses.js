import schoology from "../data/data.js";

const addCourseVideo = (id, video) => {
  schoology.courses = schoology.courses.map((course) =>
    course.id === id ? { ...course, materials: { video } } : course
  );
};

const coursesServices = {
  addCourseVideo,
};
export default coursesServices;

