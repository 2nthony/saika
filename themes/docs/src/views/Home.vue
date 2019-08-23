<template>
  <div class="saika-theme-docs">
    <Header />
    <div class="container">
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>

<style scoped>
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

.text-overflow-ellipsis {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
