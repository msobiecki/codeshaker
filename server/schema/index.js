const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} = graphql;

// dummy data
var sections = [
  {
    id: '1',
    categoryId: '1',
    title:
      'We are a group of design driven individuals passionate about creating beautiful UI designs.',
    content:
      'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.'
  },
  {
    id: '2',
    categoryId: '2',
    title:
      'We have everything you need to launch and grow a successful digital business.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.'
  },
  {
    id: '3',
    categoryId: '1',
    title:
      'We are a group of design driven individuals passionate about creating beautiful UI designs.',
    content:
      'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.'
  }
];

var categories = [
  {
    id: '1',
    name: 'WHO WE ARE'
  },
  {
    id: '2',
    name: 'WHAT WE DO'
  }
];

const SectionType = new GraphQLObjectType({
  name: 'Section',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    category: {
      type: CategoryType,
      resolve(parent, args) {
        return _.find(categories, { id: parent.categoryId });
      }
    }
  })
});

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    sections: {
      type: new GraphQLList(SectionType),
      resolve(parent, args) {
        return _.filter(sections, { categoryId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    section: {
      type: SectionType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        //code to get data from db / other source
        return _.find(sections, { id: args.id });
      }
    },
    category: {
      type: CategoryType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        //code to get data from db / other source
        return _.find(categories, { id: args.id });
      }
    },
    sections: {
      type: new GraphQLList(SectionType),
      resolve(parent, args) {
        return sections;
      }
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve(parent, args) {
        return categories;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
