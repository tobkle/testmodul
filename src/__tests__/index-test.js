// 80+ char lines are useful in describe/it, so ignore in this file.
/* eslint-disable max-len */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { testmodul } from '../';

describe('Index Test', () => {
  describe('Group 1', () => {
    it('correctly runs', async () => {
      const result = await testmodul();
      expect(result).to.equal('Hello World');
      // const query = `
      //   query HeroNameQuery {
      //     hero {
      //       name
      //     }
      //   }
      // `;
      // const result = await graphql(StarWarsSchema, query);
      // expect(result).to.deep.equal({
      //   data: {
      //     hero: {
      //       name: 'R2-D2'
      //     }
      //   }
      // });
    });
  });
});
