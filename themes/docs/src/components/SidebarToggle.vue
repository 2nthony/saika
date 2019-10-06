<template functional>
  <div class="SidebarToggle" @click="parent.$store.commit('TOGGLE_SIDEBAR')">
    <div
      class="menu-arrow"
      :class="{ open: parent.$store.state.docsStore.showSidebar }"
    >
      <div class="line top"></div>
      <div class="line bottom"></div>
    </div>
  </div>
</template>

<style scoped>
.SidebarToggle {
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    display: none;
  }
}

.menu-arrow {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.line {
  height: 1px;
  width: 22px;
  background-color: #000;
  transition: transform 0.15s ease;
}

.top {
  transform: translateY(-4px);
}
.bottom {
  transform: translateY(4px);
}

.open {
  & .top {
    transform: translateY(1px) rotate(45deg);
  }
  & .bottom {
    transform: rotate(-45deg);
  }
}
</style>
