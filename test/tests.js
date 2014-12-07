QUnit.test("Should be able to instanciate objects", function( assert ) {
  var actualObject = Prefab.instanciate();
  assert.ok(actualObject != undefined, "No object returned");
  assert.ok(Prefab.isPrototypeOf(actualObject), "actualObject is no Prefab instance");
});


QUnit.test("Chain of instanciated objects", function( assert ) {
  var actualGrandParent = Prefab.instanciate();
  var actualParent = actualGrandParent.instanciate();
  var actualObject = actualParent.instanciate();

  assert.ok(actualGrandParent != undefined, "No object returned");
  assert.ok(actualParent != undefined, "No object returned");
  assert.ok(actualObject != undefined, "No object returned");
});

QUnit.test("Overwrite inherited properties", function( assert ) {
  var actualParent = Prefab.instanciate();
  actualParent.parentProperty = "foo";

  var actualObject = actualParent.instanciate();
  actualObject.parentProperty = "bar";

  assert.equal(actualParent.parentProperty, "foo", "property not overwritten properly");
  assert.equal(actualObject.parentProperty, "bar", "property not overwritten");
});

QUnit.test("Change inherited properties", function( assert ) {
  var actualParent = Prefab.instanciate();
  actualParent.parentProperty = "foo";

  var actualObject = actualParent.instanciate();

  assert.equal(actualObject.parentProperty, "foo", "property not inherited");
  actualParent.parentProperty = "bar";
  assert.equal(actualObject.parentProperty, "bar", "property not changed");
});
