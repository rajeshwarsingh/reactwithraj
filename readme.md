Tilde (~) vs Caret (^) in package.json

caret (^) is used to specify a “compatible with most recent

https://medium.com/geekculture/tilde-vs-caret-in-package-json-whats-the-difference-2682b7e6ecf8#:~:text=The%20caret%20(%5E)%20is,compatibility%20with%20the%20major%20version.


# Dev build
npx parcel index.html 

# Production build
npx parcel build index.html 

NPM :-  install packages
NPX :- executes package

# PARCEL
- Dev Build
- local Server
- HMR = Hot Module Replacement (auto refresh)
- File watching algorith - written in c++
- caching - Faster Builds
- Image Optimization
- minification
- Buildling (basic core job)
- Compressing File
- Consistent Hashing
- Code Splitting
- Differenctial Bundling
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking ALGo - remove unused code
- Different dev and prod building

# Browerslist
package supports legacy browers
https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

# Extentions
- prettier
- Bracket Pair Colorization Toggler
- ESLint 
- Better Comments
- Tailwind CSS IntelliSense

# food app
/**
 * app
 * header
 * - logo
 * - nav
 * body
 * - Search
 * - RestaurantContainer
 * - RestaurantCard
 *  -Img
 *  - Name of res, star rating, cusine, delivery time
 * footer
 * - link
 * - copyright
 * - address
 * **/

 REcomonded file structure
 https://legacy.reactjs.org/docs/faq-structure.html

 # vertual dom react fiber algorithm
 https://github.com/acdlite/react-fiber-architecture

 # router dom
 https://reactrouter.com/en/main/routers/create-browser-router

# shortcut for snipet
 rafc

 # A tag VS Link - a tag will refresh the pagd, Link redirect without refresh
 # client side routing and server side routing
 # dynamic routing/ static routing / error route

 # React lifecycle 
 https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

 # custom hook useRestaurantMenu - Component should follow single responsibility principle

 # Create customHook utility function and deploy it in github

 # Online event listner
 https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event

 # To open the picker, press the Windows Logo + ; (semicolon) keys on your keyboard.

 # SASS 
 # https://styled-components.com/

 # withPromotedLabel - higher order component

 # Lifting state up
 - https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example
 - accoudian

 # controlled and uncontrolled state
 - accoudian

  # Props drilling
  useContext - usecontact hook is not available in class based component so for that we need to use consumer
  ```<UserContext.Consumer>
  {(data)=>console.log(data)}
  <UserContext.Consumer>```
  
  # react dev tools

  # Redux dev tools
  write opration flow ==> [add button -> action(dispatch) -> reducer -> modifiy store object]
  Read opration flow ==> [Slector(Subscribing store) -> modifiy store object]
  
  - Install @reduxjs/toolkit and react-redux
  - build our store
  - Connect our store to the app
  - Slice(cartSlice)
  - dispatch(action)
  - selector

  ```const cartItems = useSelector((store) => store.cart.items); //always use this - good
  
    const store = useSelector((store) => store);
    const cartItems = store.cart.items //bad
    
    performance issue
    ```

    immer.js redux uses

    proxy object

    RTK query(it replace old thunk)
  

