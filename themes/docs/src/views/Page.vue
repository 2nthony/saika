<template functional>
  <PostContent>
    <template #end>
      <PrevNextLinks />
    </template>
  </PostContent>
</template>

<style scoped>
.Content {
  padding-left: calc(var(--sidebar-width) + 40px);
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
  margin-top: 40px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
}
</style>
