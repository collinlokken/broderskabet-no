// /sanity/schema.js
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import collegiemedlem from './collegiemedlem_schema';
import arrangement from './arrangement_schema';
import undergruppe from './undergruppe_schema';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    collegiemedlem,
    arrangement,
    undergruppe
  ]),
});