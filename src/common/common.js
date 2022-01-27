import schoology from "../data/data.js";

const addItem = (field, item) => {
  schoology[field] = [
    ...schoology[field],
    { ...item, id: `${Date.now() + Math.random()}` },
  ];
};

const removeItem = (field, id) => {
  schoology[field] = schoology[field].filter(
    (fieldItem) => fieldItem.id !== id
  );
};
const renameItem = (field, id, newName) => {
  schoology[field] = schoology[field].map((fieldItem) =>
    fieldItem.id === id ? { ...fieldItem, name: newName } : fieldItem
  );
};

const getFieldItems = (field) => schoology[field];

const commonServices = { addItem, removeItem, getFieldItems, renameItem };

export default commonServices;
