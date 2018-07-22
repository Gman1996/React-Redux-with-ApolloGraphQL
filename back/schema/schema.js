//Imports
const graphql = require('graphql');
const studentModel = require('../model/student');
const studentGenderModel = require('../model/gender');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
} = graphql;

//Gender
const StudentGenderType = new GraphQLObjectType({
  name: 'Gender',
  fields: () => ({
    id: {type:GraphQLID},
    gender: {
      type: GraphQLString
    }
  })
});

//Student Info
const StudentType = new GraphQLObjectType({
  name: 'Student',
  fields: () => ({
    id: {type:GraphQLID},
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    grade: {
      type: GraphQLInt
    },
    gender: {
      type: StudentGenderType,
      resolve(parentValue, args){
        return studentGenderModel.findById(parentValue.id);
      }
    }
  })
});

//RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    student: {
      type: StudentType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
          return studentModel.findById(args.id);
      }
    },
    students: {
      type: new GraphQLList(StudentType),
      resolve(parentValue, args){
          return studentModel.find({})
      }
    }
  }
});

// Mutations
const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addStudent:{
            type:StudentType,
            args:{
                name: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                grade: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parentValue, args){
              let toResolve = new studentModel({
                name: args.name,
                email: args.email,
                grade: args.grade
              });
              return toResolve.save();
            }
        },
        deleteStudent:{
            type:StudentType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args){

            }
        },
        editStudent:{
            type:StudentType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)},
                name: {type: GraphQLString},
                email: {type: GraphQLString},
                grade: {type: GraphQLInt}
            },
            resolve(parentValue, args){

            }
        },
      }
      });

//Exports
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
