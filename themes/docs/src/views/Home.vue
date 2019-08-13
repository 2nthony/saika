<template function>
  <div class="saika-theme-docs">
    <Header />
    <div class="container">
      <Sidebar class="Sidebar" />
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.Sidebar {
  position: fixed;
  padding: 40px var(--gap);
  padding-left: 0;
  bottom: 0;
  top: 80px;

  @media (max-width: 768px) {
    top: var(--header-height);
    padding-left: var(--gap);
  }
}

.container {
  padding: 0 var(--gap);
}
</style>

<style>
.Wrap {
  padding: 0 var(--gap);

  @media (max-width: 768px) {
    padding: 0;
  }
}
</style>
