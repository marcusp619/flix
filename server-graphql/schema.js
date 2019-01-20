const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLSchema, GraphQLID, GraphQLFloat } = graphql;
const axios = require('axios');
require('dotenv').config();
const key = process.env.API_KEY;

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    poster_path: { type: GraphQLString },
    adult: { type: GraphQLBoolean },
    overview: { type: GraphQLString },
    release_date: { type: GraphQLString },
    genre_ids: { type: GraphQLList(GraphQLString) },
    id: { type: GraphQLID },
    original_title: { type: GraphQLString },
    original_language: { type: GraphQLString },
    title: { type: GraphQLString },
    backdrop_path: { type: GraphQLString },
    popularity: { type: GraphQLFloat },
    vote_count: { type: GraphQLFloat },
    video: { type: GraphQLBoolean },
    vote_average: { type: GraphQLFloat }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie: {
      type: new GraphQLList(MovieType),
      args: { title: { type: GraphQLString } },
      async resolve(parent, args) {
        // code to get data from db/ other source
        const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${args.title}&page=1`);
        return result.data.results;
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/ other source

      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      async resolve(parent, args) {
        const result = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`);
        return result.data.results;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve(parent, args) {
        let user = new User({
          name: args.name,
          email: args.email,
          age: args.age
        })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})