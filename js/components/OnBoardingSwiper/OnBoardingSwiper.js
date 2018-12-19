import React, { Component } from 'react'
import {
  Dimensions,
  ScrollView,
  View
} from 'react-native'
import styles from './styles'

const { width, height } = Dimensions.get('window')

export default class OnBoardingSwiper extends Component {
  static defaultProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    bounces: false,
    scrollsToTop: false,
    index: 0
  }

  state = this.initState(this.props)

  initState(props) {
    const total = props.children ? props.children.length || 1 : 0,
      index = total > 1 ? Math.min(props.index, total - 1) : 0,
      offset = width * index
    const state = {
      total,
      index,
      offset,
      width,
      height
    }
    this.internals = {
      isScrolling: false,
      offset
    }
    return state
  }

  onScrollBegin = e => {
    this.internals.isScrolling = true
  }

  onScrollEnd = e => {
    this.internals.isScrolling = false
    this.updateIndex(
      e.nativeEvent.contentOffset
        ? e.nativeEvent.contentOffset.x
        : e.nativeEvent.position * this.state.width
    )
  }

  onScrollEndDrag = e => {
    const {
        contentOffset: { x: newOffset }
      } = e.nativeEvent,
      { children } = this.props,
      { index } = this.state,
      { offset } = this.internals
    if (
      offset === newOffset &&
      (index === 0 || index === children.length - 1)
    ) {
      this.internals.isScrolling = false
    }
  }

  updateIndex = offset => {
    const state = this.state,
      diff = offset - this.internals.offset,
      step = state.width
    let index = state.index
    if (!diff) {
      return
    }
    index = parseInt(index + Math.round(diff / step), 10)
    this.internals.offset = offset
    this.setState({
      index
    })
  }

  swipe = () => {
    const state = this.state,
      diff = this.state.index + 1,
      x = diff * state.width,
      y = 0
    this.scrollView && this.scrollView.scrollTo({ x, y, animated: true })
    this.internals.isScrolling = true
  }

  renderScrollView = pages => {
    return (
      <ScrollView
        ref={component => {
          this.scrollView = component
        }}
        {...this.props}
        contentContainerStyle={[styles.wrapper, this.props.style]}
        onScrollBeginDrag={this.onScrollBegin}
        onMomentumScrollEnd={this.onScrollEnd}
        onScrollEndDrag={this.onScrollEndDrag}
      >
        {pages.map((page, i) => (
          <View style={[styles.fullScreen, styles.slide]} key={i}>
            {page}
          </View>
        ))}
      </ScrollView>
    )
  }

  renderPagination = () => {
    if (this.state.total <= 1) {
      return null
    }
    const ActiveDot = <View style={[styles.dot, styles.activeDot]} />,
      Dot = <View style={styles.dot} />
    let dots = []
    for (let key = 0; key < this.state.total; key++) {
      dots.push(
        key === this.state.index
          ? React.cloneElement(ActiveDot, { key })
          : React.cloneElement(Dot, { key })
      )
    }
    return (
      <View pointerEvents='none' style={[styles.pagination, styles.fullScreen]}>
        {dots}
      </View>
    )
  }

  render = ({ children } = this.props) => {
    return (
      <View style={[styles.container, styles.fullScreen]}>
        {this.renderScrollView(children)}
        {this.renderPagination()}
      </View>
    )
  }
}

// source code: https://rationalappdev.com/complete-guide-to-mobile-app-onboarding-with-react-native/