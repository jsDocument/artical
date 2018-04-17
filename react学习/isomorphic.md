### ReactComponent
+ ReactNoopUpdateQueue 定义了一个对象, 包含isMounted, enqueueCallback, enqueueForceUpdate, enqueueReplaceState, enqueueSetState方法

`

    function ReactComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      // We initialize the default updater but the real one gets injected by the
      // renderer.
      this.updater = updater || ReactNoopUpdateQueue;
    }
    ReactComponent.prototype.setState = function(partialState, callback) {
      invariant(
        typeof partialState === 'object' ||
          typeof partialState === 'function' ||
          partialState == null,
        'setState(...): takes an object of state variables to update or a ' +
          'function which returns an object of state variables.',
      );
      this.updater.enqueueSetState(this, partialState);
      if (callback) {
        this.updater.enqueueCallback(this, callback, 'setState');
      }
    };
    ReactComponent.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this);
      if (callback) {
        this.updater.enqueueCallback(this, callback, 'forceUpdate');
      }
    };
    function ReactPureComponent(props, context, updater) {
      // Duplicated from ReactComponent.
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      // We initialize the default updater but the real one gets injected by the
      // renderer.
      this.updater = updater || ReactNoopUpdateQueue;
    }

    function ComponentDummy() {}
    ComponentDummy.prototype = ReactComponent.prototype;
    ReactPureComponent.prototype = new ComponentDummy();
    ReactPureComponent.prototype.constructor = ReactPureComponent;
    // Avoid an extra prototype jump for these methods.
    Object.assign(ReactPureComponent.prototype, ReactComponent.prototype);
    ReactPureComponent.prototype.isPureReactComponent = true;
`
