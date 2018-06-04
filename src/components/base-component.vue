<template>
  <div>
    <span @click="handleClick">props: {{text}}</span>
    <!--具名插槽-->
    <slot name="slot1"></slot>
    <p>===========</p>
    <!--默认插槽-->
    <slot></slot>
  </div>
</template>
<script>
const consoleMixin = {
  mounted () {
    console.log('I have already mounted')
  }
}
export default {
  name: 'BaseComponent',
  props: {
    text: {
      type: Number
    }
  },
  mixins: [consoleMixin],
  methods: {
    handleClick () {
      this.$emit('customize-click')
    }
  }
}
</script>
