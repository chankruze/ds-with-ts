/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 08 2022 16:47:11 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Stack from '../src/stack'

describe('Stack test', () => {
  // create stack
  it('should create a stack', () => {
    const stack = new Stack(10)
    expect(stack).toBeDefined()
  })

  // should get max size of the stack
  it('should get max size of the stack', () => {
    const stack = new Stack(20)
    expect(stack.getMaxSize()).toBe(20)
  })

  // push element to stack
  it('should push element to stack', () => {
    const stack = new Stack(10)
    stack.push(1)
    expect(stack.isEmpty()).toBeFalsy()
  })

  // pop element from stack
  it('should pop element from stack', () => {
    const stack = new Stack(10)
    stack.push(1)
    const data = stack.pop()
    expect(data).toBe(1)
  })

  // pop element from stack
  it('should pop element from stack', () => {
    const stack = new Stack(10)
    const data = stack.pop()
    expect(data).toBeUndefined()
  })

  // should peek the top elem of the stack
  it('should peek the top elem of the stack', () => {
    const stack = new Stack(20)
    for (let i = 0; i < 10; i++) {
      stack.push(i)
    }
    expect(stack.peek()).toBe(9)
  })

  // should peek the top elem of the stack
  it('should peek the top elem of the stack', () => {
    const stack = new Stack(20)
    expect(stack.peek()).toBeUndefined()
  })

  // check if stack is empty
  it('should check if stack is empty', () => {
    const stack = new Stack(10)
    expect(stack.isEmpty()).toBeTruthy()
  })

  // check if stack is full
  it('should check if stack is full', () => {
    const stack = new Stack(10)
    for (let i = 1; i <= 10; i++) {
      stack.push(i)
    }
    expect(stack.isFull()).toBeTruthy()
  })
})
