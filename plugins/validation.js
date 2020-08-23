import { extend } from 'vee-validate'
import { required, min, confirmed } from 'vee-validate/dist/rules'

extend('required', { ...required })

extend('min', { ...min })

extend('confirmed', {
  ...confirmed,
  message: 'yess',
})
