const lib = require('../lib/wechat')
/* test('absolute - should return positive if input positive', () => {
  // throw new Error('Something failed!')
  const result = lib.absolute(1)
  expect(result).toBe(1)
})

test('absolute - should return positive if input negative', () => {
  // throw new Error('Something failed!')
  const result = lib.absolute(-1)
  expect(result).toBe(1)
})

test('absolute - should return 0 if input 0', () => {
  // throw new Error('Something failed!')
  const result = lib.absolute(0)
  expect(result).toBe(0)
}) */

describe('absolute', () => {
  test('should return positive if input is  positive', () => {
    // throw new Error('Something failed!')
    const result = lib.absolute(1)
    expect(result).toBe(1)
  })

  test('should return positive if input is negative', () => {
    // throw new Error('Something failed!')
    const result = lib.absolute(-1)
    expect(result).toBe(1)
  })

  test('should return 0 if input is 0', () => {
    // throw new Error('Something failed!')
    const result = lib.absolute(0)
    expect(result).toBe(0)
  })
})

describe('greet', () => {
  it('should return greet message', () => {
    const result = lib.greet('Mayu')
    // expect(result).toBe('Hello Mayu')
    // expect(result).toMatch(/Mayu/)
    expect(result).toContain('Mayu')
  })
})

describe('getPay', () => {
  it('should return supported pay', () => {
    const result = lib.getPay()
    expect(result).toEqual(expect.arrayContaining(['USD', 'RMB', 'EUR']))
  })
})

describe('getProduct', () => {
  it('should return product with given product id ', () => {
    const result = lib.getProduct(1)
    /* expect(result).toEqual({
      id: 1,
      price: 10
    }) */
    // toMatchObject
    // result只需要有这两个元素就可以了
    /* expect(result).toMatchObject({
      id: 1,
      price: 10
    }) */
    expect(result).toHaveProperty('id', 1)
  })
})

describe('registerUser', () => {
  it('should throw error if username is not valid', () => {
    const args = [null, undefined, '', NaN, 0]
    args.forEach(a => {
      expect(() => {
        lib.registerUser(a)
      }).toThrow()
    })
  })

  it('should return a user object if username is  valid', () => {
    const user = lib.registerUser('Mayu')
    expect(user).toHaveProperty('username', 'Mayu')
    expect(user.id).toBeGreaterThan(0)
  })
})