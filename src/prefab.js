var Prefab = (function() {
  // TODO: use .create-method directly
  function instanciate() {
    var object = Object.create(this);
    return object;
  };

  var Prefab = instanciate.call(Object);
  Prefab.instanciate = instanciate;

  return Prefab;
})();
