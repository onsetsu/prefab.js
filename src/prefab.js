define(function() {
  'use strict';

  /**
   * TODO
   */
  function instanciate(propertyObject) {
    var newObject = Object.create(this);

    if(typeof propertyObject !== 'undefined') {
      Object.getOwnPropertyNames(propertyObject).forEach(function(prop) {
        var descriptor = Object.getOwnPropertyDescriptor(propertyObject, prop)
        Object.defineProperty(newObject, prop, descriptor)
      });
    }

    return newObject;
  };

  var Prefab = instanciate.call(Object, {
    instanciate: instanciate
  });

  return Prefab;
});
