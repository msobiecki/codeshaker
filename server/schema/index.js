module.exports = `
  type Category {
    id: ID
    name: String
    sections: [Section]
  }
  type Section {
    id: ID
    title: String
    content: String
    categoryId: ID
    category: Category
  }
  type Query {
    categories: [Category]
    category(id: ID): Category
    sections: [Section]
    section(id: ID): Section
  }
  type Mutation {
    createSection(title: String, content:String, categoryId: ID): Section
    updateSection(id: ID, title: String, content:String): [Int]
    deleteSection(id: ID): Int
  }
`;
