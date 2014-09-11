toLocalStorage
==============

Easy way to create local storages with expiration time and other features

**NOTE**: jQuery is required


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

TODO / Bugs
-----

  * Have a more interesting test/example
