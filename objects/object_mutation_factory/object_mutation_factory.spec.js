import objectMutationFactory from './object_mutation_factory';

describe('objectMutationFactory', () => {
  let objectRefForTest;
  let objectToMutate;

  beforeEach(() => {
    objectRefForTest = {};
    objectToMutate = objectRefForTest;
  });

  it('Can get and set an object on the factory', () => {
    objectMutationFactory.setObject(objectToMutate);

    const obj = objectMutationFactory.getObject();

    expect(obj).toBe(objectToMutate);
  });
});
