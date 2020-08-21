# Remove sensitive data from model during JSON output in objection 


## Usage 


```js

const { Model, mixin } = require('objection')

const RemoveSensitiveFields = require('objection-remove-sensitive-fields')

class User extends mixin(Model, [RemoveSensitiveFields]) {
  static sensitiveFields = ['salt','password']
}


```


## What I don't know yet. 


Side-Effects as I have just started in objection
