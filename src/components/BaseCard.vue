<template>
  <div @click="$emit('card-click')" class="card">
    <slot></slot>
  </div>
</template>
