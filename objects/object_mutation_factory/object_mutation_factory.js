let currentObject = null;

/*
TODO: Make this object pass the tests in './object_mutation_factory.spec.js'
 */
const objectMutationFactory = {
  /*
  TODO:
   const someObj = {};
   objectMutationFactory.setObject(someObj);
   */
  setObject: (object) => {

  },
  /*
  TODO:
   const theObj = objectMutationFactory.getObject();
   console.log(theObj === someObj); // => true
   */
  getObject: () => {

  },
  /*
  TODO:
   objectMutationFactory.addProperty('test key', 'test value');
   console.log(someObj['test key']); // => 'test value'
   */
  addProperty: (name, value) => {

  },
  /*
  TODO:
   objectMutationFactory.removeProperty('test key');
   console.log(someObj['test key']); // => undefined
   */
  removeProperty: (name, value) => {

  },
  /*
  TODO:
   objectMutationFactory.addProperty('one', 1);
   objectMutationFactory.addProperty('two', 2);
   console.log(someObj); // => { one: 1, two: 2 }
   objectMutationFactory.removeAllProperties();
   console.log(someObj); // => {};
   */
  removeAllProperties: () => {

  },
  /*
  TODO:
   objectMutationFactory.addProperty('clone key', 'clone');
   console.log(someObj); // => { 'clone key': 'clone' }
   const clonedSomeObj = objectMutationFactory.clone();
   console.log(clonedSomeObj); // => { 'clone key': 'clone' }
   console.log(someObj === clonedSomeObj); // => false
   */
  clone: () => {

  },
};

export default objectMutationFactory;
