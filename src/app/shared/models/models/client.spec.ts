import { client } from './client';

describe('Client', () => {
  it('should create an instance', () => {
    expect(new client()).toBeTruthy();
  });
});
