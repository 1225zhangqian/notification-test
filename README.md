# notification-test


🎉 notification-test allow you to add notification to your app with ease. No more nonsense!

## Installation

```
$ npm install notification-test
$ yarn add notification-test
```

## Usage

```javascript
  import React, { Component } from 'react';
  import Tip from 'is-notification'

  class App extends Component {
    notify = () => {
       Tip.open({
        message:'message',
        description:'description'
       })
    }

    render(){
      return (
        <div>
          <button onClick={this.notify}>Notify !</button>
        </div>
      );
    }
  }
```
### Set autoclose delay or disable it


```js
   Tip.open({
    message:'message',
    description:'description',
    duration: 0
   })
```

### Notifications with color reminders

```js
   Tip.info({
    message:'info',
    description:'info'
   })
   Tip.success({
    message:'success',
    description:'success'
   })
   Tip.warning({
    message:'warning',
    description:'warning'
   })
   Tip.error({
    message:'error',
    description:'error'
   })
```
### Notifications position

```js
   Tip.info({
    message:'info',
    description:'info',
    placement: 'topLeft'
   })
   Tip.success({
    message:'success',
    description:'success',
    placement: 'bottomLeft'
   })
   Tip.warning({
    message:'warning',
    description:'warning',
    placement: 'topRight'
   })
   Tip.error({
    message:'error',
    description:'error',
    placement: 'bottomRight'
   })
```