import { theme, extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  ...theme,
  initialColorMode: 'light',
  useSystemColorMode: true,
  styles: {
    global: props => ({
      'html, body': {
        fontSize: 'md',
        color: props.colorMode === 'dark' ? 'white' : 'purple.900',
        lineHeight: 'tall',
        scrollBehavior: 'smooth'
      },
      a: {
        color: props.colorMode === 'dark' ? 'pink.800' : 'purple.900'
      }
    })
  },
  colors: {
    brand: {}
  }
})

export default customTheme
