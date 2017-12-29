<template>
  <transition name="share">
    <div class="m-share"
      @click="$emit('closeShare')">
      <div class="share-dog"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Share'
}
</script>

<style lang="scss" scoped>
.m-share {
  @include mask();
  .share-dog {
    pointer-events: none;
    position: absolute;
    top: r(20);
    right: r(20);
    width: r(190);
    height: r(196.5);
    @include image("../assets/img/share-dog.png");
  }
}

.share-enter-active,
.share-leave-active {
  transition: opacity .6s;
  .share-dog {
    transition: transform .6s;
  }
}

.share-enter,
.share-leave-to {
  opacity: 0;
  .share-dog {
    transform: translate(-100%, 100%);
  }
}
</style>
