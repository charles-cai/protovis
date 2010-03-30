/**
 * @ignore
 * @class
 */
pv.Layout = function() {
  pv.Panel.call(this);
};

pv.Layout.prototype = pv.extend(pv.Panel);

/** @private Defines a local property with the specified name and cast. */
pv.Layout.prototype.property = function(name, cast) {
  this.propertyMethod(name, true, cast);
  return this;
};

/** @private Register an init hook, after all other defs. */
pv.Layout.prototype.bind = function() {
  pv.Panel.prototype.bind.call(this);
  var binds = this.binds;
  if (!binds.properties.init) {
    var p = this.propertyValue("init", this.init);
    p.type = 1;
    binds.defs.push(p);
  }
};

/** @private Initialization hook after defs have been evaluated. */
pv.Layout.prototype.init = function() {};
