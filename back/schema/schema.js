//Imports
const graphql = require('graphql');
const studentModel = require('../model/student');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
} = graphql;

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
      type: GraphQLString,
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
                grade: {type: new GraphQLNonNull(GraphQLInt)},
                gender: {type: new GraphQLNonNull(GraphQLString)}
            },
            async resolve(parentValue, args){
              try{
                let toResolve = new studentModel({
                  name: args.name,
                  email: args.email,
                  grade: args.grade,
                  gender: args.gender
                });
                return toResolve.save();
              }
              catch(err){
                throw err.message
              }
            }
        },
        deleteStudent:{
            type:StudentType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args){
              return studentModel.findByIdAndRemove(args.id).exec();
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
              return studentModel.findByIdAndUpdate(
                args.id,
                {
                  $set: {
                    name: args.name,
                    email: args.email,
                    grade: args.grade
                  }
                }
              )
              .catch((err) => {
                console.log(err)
              });
            }
        }
      }
      });

//Exports
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
