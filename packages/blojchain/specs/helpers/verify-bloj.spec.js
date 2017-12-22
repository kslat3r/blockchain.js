const expect = require('chai').expect;
const verifyBloj = require('../../src/helpers/verify-bloj');

describe('verifyBloj', () => {
  it('should verify a blojs is correct', () => {
    const verified = verifyBloj({
      index: 1,
      nonce: 4786,
      data: 'foo',
      prevHash: '0000000000000000000000000000000000000000000000000000000000000000',
      hash: 'e47a1328654b7a4602134de98be9ba08e9969555b92f4252334c83cd082a3374',
      timestamp: 10000,
    });

    expect(verified).to.be.true;
  });
});