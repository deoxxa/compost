Compost
=======

Decompose and compose integers to and from lists of bits.

Overview
--------

Need to know what bits are set in a number? Compost is here to help you out!

With Compost, you can decompose numbers into lists of bits and recompose them
as easy as cake!

Usage
-----

Also see the [documentation](http://deoxxa.github.com/dotty/docs/) and
[example](example.js).

```javascript
var compost = require("./index");

// {0: true, 2: true}
console.log(compost.decompose(5));

// 5
console.log(compost.compose({0: true, 2: true}));
```

License
-------

3-clause BSD. A copy is included with the source.

Contact
-------

* GitHub ([http://github.com/deoxxa](deoxxa))
* Twitter ([http://twitter.com/deoxxa](@deoxxa))
* ADN ([https://alpha.app.net/deoxxa](@deoxxa))
* Email ([mailto:deoxxa@fknsrs.biz](deoxxa@fknsrs.biz))
