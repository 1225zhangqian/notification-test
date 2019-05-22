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
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  // minified version is also included
  // import 'react-toastify/dist/ReactToastify.min.css';

  class App extends Component {
    notify = () => {
       Notification.open({
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
   Notification.open({
    message:'message',
    description:'description',
    duration: 0
   })
```

### Notifications with color reminders

```js
    Notification.info({
    message:'info',
    description:'info'
   })
   Notification.success({
    message:'success',
    description:'success'
   })
   Notification.warning({
    message:'warning',
    description:'warning'
   })
   Notification.error({
    message:'error',
    description:'error'
   })
```
