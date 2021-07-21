import objectMutationFactory from './object_mutation_factory';

describe('objectMutationFactory', () => {
  let objectRefForTest;
  let objectToMutate;

  beforeEach(() => {
    objectRefForTest = {};
    objectToMutate = objectRefForTest;
  });

  it('can get and set an object on the factory', () => {
    objectMutationFactory.setObject(objectToMutate);

    const obj = objectMutationFactory.getObject();

    expect(obj).toBe(objectToMutate);
  });

  it('can add a property to an object', () => {
    objectMutationFactory.setObject(objectToMutate);

    const key = 'dogs';
    const value = 'are the best animal';

    objectMutationFactory.addProperty(key, value);

    expect(objectToMutate).toEqual({
      [key]: value,
    });
  });

  it('can remove a property from an object', () => {
    objectMutationFactory.setObject(objectToMutate);

    const key = 'dogs';
    const value = 'are the best animal';

    objectMutationFactory.addProperty(key, value);

    expect(objectToMutate).toEqual({
      [key]: value,
    });

    objectMutationFactory.removeProperty(key);

    expect(objectToMutate).toEqual({});
  });

  it('can return a cloned version of the object', () => {
    objectMutationFactory.setObject(objectToMutate);

    const key = 'cats';
    const value = 'are also pretty cool';

    objectMutationFactory.addProperty(key, value);

    const clonedObj = objectMutationFactory.clone();

    expect(clonedObj).not.toBe(objectToMutate);
    expect(clonedObj).toEqual({
      [key]: value,
    });
  });
});
