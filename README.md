Webpack 4.16 React 16.4 node.js 8.11.3
dynamic imports does not create separete chunk for imported components- you can see it inside InitialComponent.js where ToggleComponent imported inside componentWillMount()

in Network (chrom dev tools tab) you can see that no additional chunk created for dynamicly imported `ToggleComponent` - only vendor.bundle.js and app.js

If not use safeStringify on renderer - you will get the error like 'Uncaught SyntaxError: Invalid or unexpected token', caused of
strings with some special characters like `</script>` or `</link>`

Also if you use the safeStringify function you can sometimes get warning:
`Warning: Text content did not match. Server: "<script> aj26kl2j362l6k2jlkjkl2 jk3h   </script>" Client: ""`



check that node version is 8.11.3 ( tried only on this version)
you should install node_modules (npm i) inside project root and _server folders 
to start server:  cd _server &&  node server.js
to start client - from project root run: node node_modules/webpack/bin/webpack.js
