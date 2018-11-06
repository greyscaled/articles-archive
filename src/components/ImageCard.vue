<template>
  <Card>
    <div @click="$emit('card-image-click')" class="card-image imagecard-card-image">
      <img :src="image">
    </div>
    <div class="card-content imagecard-card-content">
      <span  @click="$emit('card-image-click')" class="card-title">{{ title }}</span>
      <slot></slot>
    </div>
  </Card>
</template>

<script>
import Card from '@/components/BaseCard'

export default {
  components: { Card },
  props: {
    image: String,
    title: String
  }
}
</script>

<style>
.imagecard-card-image,
.imagecard-card-image img,
.imagecard-card-content,
.imagecard-card-content span {
  cursor: pointer;
}
</style>
