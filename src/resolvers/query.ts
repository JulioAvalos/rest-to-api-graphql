import { IResolvers } from 'graphql-tools';

const resolvers: IResolvers = {
  Query: {
    async seasonsList(_: void, __: any, { dataSources }) {
      return await dataSources.seasons
        .getSeasons()
        .then((data: any) => data.MRData.SeasonTable.Seasons);
    },
  }, 
};

export default resolvers;
