import app from '../../src/app';

describe('"todo" service', () => {
  it('registered the service', () => {
    const service = app.service('todo');
    expect(service).toBeTruthy();
  });

});
