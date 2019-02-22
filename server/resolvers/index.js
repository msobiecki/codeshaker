module.exports = {
  Category: {
    sections: (parent, args, context, info) => parent.getSections()
  },
  Section: {
    category: (parent, args, context, info) => parent.getCategory()
  },
  Query: {
    categories: (parent, args, { db }, info) => db.Category.findAll(),
    category: (parent, { id }, { db }, info) => db.Category.findById(id),
    sections: (parent, args, { db }, info) => db.Section.findAll(),
    section: (parent, { id }, { db }, info) => db.Section.findById(id)
  },
  Mutation: {
    createSection: (parent, { title, content, categoryId }, { db }, info) =>
      db.Section.create({
        title: title,
        content: content,
        categoryId: categoryId
      }),
    updateSection: (parent, { title, content, id }, { db }, info) =>
      db.Section.update(
        {
          title: title,
          content: content
        },
        {
          where: {
            id: id
          }
        }
      ),
    deleteSection: (parent, { id }, { db }, info) =>
      db.Section.destroy({
        where: {
          id: id
        }
      })
  }
};
