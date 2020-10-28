export default (notes, category) => {
  return notes.filter((note) => {
    note.category === category;
  });
};
