import schoology from "../data/data.js";

const addItem = (field, item) => {
  const id = `${Date.now() + Math.random()}`;
  schoology[field] = [...schoology[field], { ...item, id }];
  return id;
};

const removeItem = (field, id) => {
  schoology[field] = schoology[field].filter(
    (fieldItem) => fieldItem.id !== id
  );
  console.log(schoology);
};
const renameItem = (field, id, newName) => {
  schoology[field] = schoology[field].map((fieldItem) =>
    fieldItem.id === id ? { ...fieldItem, name: newName } : fieldItem
  );
};

const getFieldItems = (field) => schoology[field];

const commonServices = { addItem, removeItem, getFieldItems, renameItem };

export default commonServices;
