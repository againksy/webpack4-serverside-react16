import React from 'react';

import express from 'express'
import renderer from './renderer'
import InitialComponent from '../components/InitialComponent';

var router = express.Router();

router.get('/', function (req, res, next) {
  res.state = {
    initial:{
      value: '<script> aj26kl2j362l6k2jlkjkl2 jk3h   </script>',
      // with such values anywhere in state, the render broken if not using safe JSON.stringify in renderer
      runningComponent: 'InitialComponent'
    }
  };
  req.reactComponent = <InitialComponent/>;
  return next();
})

router.get('/initial', function (req, res, next) {
  res.state = {
    initial:{
      value: '<s/c<link rel="[refetch" > slafjklsadjfksadjfjasfjas</link> <script>asdlkfjaslfjs </script>',
      // with such values anywhere in state, the render broken if not using safe JSON.stringify in renderer
      runningComponent: 'InitialComponent'
    }
  };
  req.reactComponent = <InitialComponent/>;
  return next();
})

router.use(renderer);

module.exports = router;
