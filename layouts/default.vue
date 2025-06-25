<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header Component -->
    <AppHeader />
    
    <!-- Main Content Area -->
    <main class="flex-1">
      <slot />
    </main>
    
    <!-- Footer Component -->
    <AppFooter />
  </div>
</template>

<script setup>
// Layout for all pages with header and footer
</script>