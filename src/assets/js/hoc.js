/**

 */
export default function WithConsole (WrappedComponent) {
  return {
    // template: '<wrapped v-on="$listenners" v-bind="$attrs"></wrapped>',
    // components: {
    //   WrappedComponent
    // },
    mounted () {
      console.log('I have already mounted')
    },
    props: WrappedComponent.props,
    render (h) {
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        .map(vnode => {
          vnode.context = this._self
          return vnode
        })
      return h(WrappedComponent, {
        on: this.$listeners,
        scopedSlots: this.$scopedSlots,
        attrs: this.$attrs,
        props: this.$props
      }, slots)
    }
  }
}
