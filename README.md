toLocalStorage
==============

Easy way to create local storages by setting the keys and the expiration time.

**NOTE**: jQuery is required.


Usage
-----

Include `toLocalStorage.js`

```html
<script type="text/javascript" src="lib/toLocalStorage.js"></script>
```

API
-----

  * yourObject.toLocalStorage("setItem", { Key: "yourKey", ExpirationInMinutes: 60 });
  * $.fn.toLocalStorage("getItem", "yourKey")
  * $.fn.toLocalStorage("clear",  "yourKey");

Supported Browsers
-----

  * Chrome 4+
  * Firefox 3.5+
  * Safari 4+
  * Opera 10+
  * IE 8+ (Oh God!)


TODO / Bugs
-----

  * Have a more interesting test/example.
  * Add further fetures to handle the local storage.
