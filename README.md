2022.11.21
引入包styled-components，引入reset.css,使用styled-components完成Header组件布局
问题：
    Attempted import error: 'injectGlobal' is not exported from 'styled-components'--------API废弃
解决：
    第一步， 用createGlobalStyle定义全局样式，把全局样式包裹在其中，包裹css样式使用反引号字符串：
    import { createGlobalStyle } from 'styled-components'
    export const Globalstyle = createGlobalStyle`　
    body{
    　　margin: 0;
　  　padding: 0
　  }`

    第二步，在项目主文件导入样式：
    import { Globalstyle } from './style'

    第三步，以样式组件的方式当作标签引入：
    class App extends Component {
    render () {
        return (
        <Fragment>
            <GlobalStyled/>
        </Fragment>
        )
        }
    }
2022.11.22
问题：
    无法引入阿里巴巴图标库
解决：
    生成本地代码引入
2022.11.23
利用CSSTransition实现搜索框的动画效果