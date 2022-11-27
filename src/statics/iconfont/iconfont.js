import { createGlobalStyle } from 'styled-components'
export const Iconfont = createGlobalStyle`

@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/c/font_3785852_cupmv7ym95s.woff2?t=1669103339248') format('woff2'),
       url('//at.alicdn.com/t/c/font_3785852_cupmv7ym95s.woff?t=1669103339248') format('woff'),
       url('//at.alicdn.com/t/c/font_3785852_cupmv7ym95s.ttf?t=1669103339248') format('truetype');
}

.iconfont {
  font-family: "iconfont"!important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`