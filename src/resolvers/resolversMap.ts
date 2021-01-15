import { IResolvers } from 'graphql-tools';
import mutation from './mutation';
import query from './query';
import type from './types';

const resolversMap: IResolvers = {
    ...query,
    ...mutation,
    ...type
}
    

export default resolversMap