


## react router + github pages 

Source: https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/


### Steps to deploy the basic app:

1. npx create-react-app react-test-gh-pages
2. npm i gh-pages -save 
3. git push -u origin main
4. set homepage and scripts section
5. npm run deploy

### Adding routing (https://github.com/rafgraph/spa-github-pages):
1. `npm i react-router-dom --save` (6.4.2)
2. `import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'`

#### HashRouter (removed):
1. `import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'`
2. https://oleg-butko.github.io/react-test-gh-pages/#/
3. https://oleg-butko.github.io/react-test-gh-pages/#/about


#### Custom 404.html page (looks nice)
1. add `public/404.html`
2. edit `public/index.html`
3. https://oleg-butko.github.io/react-test-gh-pages/
4. https://oleg-butko.github.io/react-test-gh-pages/about




