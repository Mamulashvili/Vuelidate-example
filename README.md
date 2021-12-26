# vue-form-validation

## Project setup
```
npm install
```
dependencies:
- vuex
- vue-router
- vuelidate
- nprogress


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Views
- Sign in
(validate username & password, enable $autoDirty, enable $lazy validation) validates when user changes input values
- Sign up
- User profile

vuelidate required validation rule with custom error message

```js
required: helpers.withMessage("This field can't be empty", required),
```

$lazy load param as a global config
<br> 
<b>composition API </b>
```js
const v$ = useVuelidate(rules, state, { $lazy: true });
```
<b>config API </b>
```js
validationConfig: {
   $lazy: true
},
```

Custom vuelidate validation rule with extra param. path:  `/rules/emailValidation`
```js
export const customEmailValidation = param => value => value.includes(param)
 customEmailValidation: helpers.withMessage(
    `Email must include you\'r username : ${formatUsername.value}`,
    customEmailValidation(formatUsername.value)
),
```
