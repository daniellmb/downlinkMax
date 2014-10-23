/**
 * @file
 *
 * ### Responsibilities
 * - unit test downlinkMax.js
 *
 * @author Daniel Lamb <dlamb.open.source@gmail.com>
 */
'use strict';

/*global downlinkmax*/
describe('downlinkmax.js', function () {
  var org = window.navigator;

  afterEach(function () {
    // reset global environment
    window.navigator = org;
  });

  function arrange(obj) {
    // arrange global environment
    window.navigator = obj;
  }

  it('should have a working test harness', function () {
    // arrange
    // act
    // assert
    expect(true).not.toBe(false);
  });

  it('should exist', function () {
    // arrange
    // act
    // assert
    expect(typeof downlinkmax).toBe('function');
  });

  describe('navigator.connection supported', function () {
    beforeEach(function () {
      arrange({
        connection: {downlinkMax:'foo'}
      });
    });

    it('should return the API value', function () {
      // arrange
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe('foo');
    });
  });

  describe('navigator.mozConnection supported', function () {
    beforeEach(function () {
      arrange({
        mozConnection: {downlinkMax:'bar'}
      });
    });

    it('should return the API value', function () {
      // arrange
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe('bar');
    });
  });

  describe('navigator.webkitConnection supported', function () {
    beforeEach(function () {
      arrange({
        webkitConnection: {downlinkMax:'baz'}
      });
    });

    it('should return the API value', function () {
      // arrange
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe('baz');
    });
  });

  describe('API not supported', function () {
    beforeEach(function () {
      arrange({});
    });

    it('should return Infinity', function () {
      // arrange
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe(Infinity);
    });

  });

  describe('connection.bandwidth supported', function () {
    beforeEach(function () {
      arrange({
        connection: {
          bandwidth: 1 // in MB/s
        }
      });
    });

    it('should convert MB/s to Mbit/s', function () {
      // arrange
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe(8);
    });
  });


  describe('connection.type supported', function () {
    it('should map the type none', function () {
      // arrange
      arrange({
        connection: {
          type: 'none'
        }
      });
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe(0);
    });
    it('should map the type 2g', function () {
      // arrange
      arrange({
        connection: {
          type: '2g'
        }
      });
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe(0.134);
    });
    it('should map the type bluetooth', function () {
      // arrange
      arrange({
        connection: {
          type: 'bluetooth'
        }
      });
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe(2);
    });
    it('should map the type cellular', function () {
      // arrange
      arrange({
        connection: {
          type: 'cellular'
        }
      });
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe(2);
    });
    it('should map the type 3g', function () {
      // arrange
      arrange({
        connection: {
          type: '3g'
        }
      });
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe(8.95);
    });
    it('should map the type 4g', function () {
      // arrange
      arrange({
        connection: {
          type: '4g'
        }
      });
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe(100);
    });
    it('should map the type ethernet', function () {
      // arrange
      arrange({
        connection: {
          type: 'ethernet'
        }
      });
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe(550);
    });
    it('should map the type wifi', function () {
      // arrange
      arrange({
        connection: {
          type: 'wifi'
        }
      });
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe(600);
    });
    it('should map the type other', function () {
      // arrange
      arrange({
        connection: {
          type: 'other'
        }
      });
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe(Infinity);
    });
    it('should map the type unknown', function () {
      // arrange
      arrange({
        connection: {
          type: 'unknown'
        }
      });
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe(Infinity);
    });
    it('should map any type', function () {
      // arrange
      arrange({
        connection: {
          type: 'foobarbaz'
        }
      });
      // act
      var result = downlinkmax();
      // assert
      expect(result).toBe(Infinity);
    });
  });

});