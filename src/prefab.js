var Prefab = (function() {
  function instanciate() {
    var object = Object.create(this);
    return object;
  };

  var Prefab = instanciate.call(Object);
  Prefab.instanciate = instanciate;

  return Prefab;
})();
