import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import { actionCreators } from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SraechInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'
const getListArea = (show) => {
    if (show) {
        return (
            <SraechInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </SearchInfoList>
            </SraechInfo>
        )
    } else {
        return null;
    }
}
const Header = (props) => {
    return (
        < HeaderWrapper >
            <Logo />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <i className='iconfont'>&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</i>
                    {getListArea(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'>
                    <i className='iconfont'>&#xe7c5;</i>
                    写文章</Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper >
    )
}
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['Header', 'focused'])
    }
}
const MapDispathToProps = (dispath) => {
    return {
        handleInputFocus() {
            dispath(actionCreators.serarchFocus());
        },
        handleInputBlur() {
            dispath(actionCreators.serarchBlur())
        }
    }
}
export default connect(mapStateToProps, MapDispathToProps)(Header);