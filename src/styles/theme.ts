import { getStatusBarHeight } from 'react-native-iphone-x-helper';
export const theme = {
  colors: {
    background: '#FFFFFF',
    primary: '#7350F2',
    secondary: '#008000',
    text: '#000000',
    shape: '#b3cccc',
    note: '#000000'
  },
  fonts: {
    fontFamily: 'Roboto',
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    bold: 'Inter_700Bold'
  },
  statusBar:{
    len: getStatusBarHeight()
  }
}