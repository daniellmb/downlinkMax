###
@file

## Responsibilities
- unit test downlinkMax.coffee

@author Daniel Lamb <dlamb.open.source@gmail.com>
###

describe 'downlinkmax.coffee', ->
  org = window.navigator
  
  arrange = (obj) ->    
    # arrange global environment
    window.navigator = obj
    
  afterEach ->
    # reset global environment
    window.navigator = org

  it 'should have a working test harness', ->
    # arrange
    # act
    # assert
    expect(yes).not.toBe no

  it 'should exist', ->
    # arrange
    # act
    # assert
    expect(typeof downlinkmax).toBe 'function'

  describe 'navigator.connection supported', ->
    beforeEach ->
      arrange connection:
        downlinkMax: 'foo'

    it 'should return the API value', ->
      # arrange
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe 'foo'

  describe 'navigator.mozConnection supported', ->
    beforeEach ->
      arrange mozConnection:
        downlinkMax: 'bar'

    it 'should return the API value', ->
      # arrange
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe 'bar'

  describe 'navigator.webkitConnection supported', ->
    beforeEach ->
      arrange webkitConnection:
        downlinkMax: 'baz'

    it 'should return the API value', ->
      # arrange
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe 'baz'

  describe 'API not supported', ->
    beforeEach ->
      arrange {}

    it 'should return Infinity', ->
      # arrange
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe Infinity

  describe 'connection.bandwidth supported', ->
    beforeEach ->
      arrange connection:
        bandwidth: 1 # in MB/s

    it "should convert MB/s to Mbit/s", ->
      # arrange
      # act
      result = downlinkmax()

      # assert
      expect(result).toBe 8

  describe 'connection.type supported', ->
    it 'should map the type none', ->
      # arrange
      arrange connection:
        type: 'none'
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe 0

    it 'should map the type 2g', ->
      # arrange
      arrange connection:
        type: '2g'
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe 0.134

    it 'should map the type bluetooth', ->
      # arrange
      arrange connection:
        type: 'bluetooth'
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe 2

    it 'should map the type cellular', ->
      # arrange
      arrange connection:
        type: 'cellular'
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe 2

    it 'should map the type 3g', ->
      # arrange
      arrange connection:
        type: '3g'
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe 8.95

    it 'should map the type 4g', ->
      # arrange
      arrange connection:
        type: '4g'
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe 100

    it 'should map the type ethernet', ->
      # arrange
      arrange connection:
        type: 'ethernet'
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe 550

    it 'should map the type wifi', ->
      # arrange
      arrange connection:
        type: 'wifi'
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe 600

    it 'should map the type other', ->
      # arrange
      arrange connection:
        type: 'other'
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe Infinity

    it 'should map the type unknown', ->
      # arrange
      arrange connection:
        type: 'unknown'
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe Infinity

    it 'should map any type', ->
      # arrange
      arrange connection:
        type: 'foobarbaz'
      # act
      result = downlinkmax()
      # assert
      expect(result).toBe Infinity