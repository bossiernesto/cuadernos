<template>
  <div class="markdown-body">
    <router-view />
  </div>
</template>
<style lang="scss">
@import './../assets/css/github-markdown.css';

.back {
  background-color: #42b883;
  color: white;
  margin-top: 5rem;
  text-decoration: none;
  padding: 10px 15px;
  border: 1px solid currentColor;
  border-radius: .5rem;
  display: inline-block;
  transition: all .3s ease;
  &:hover {
    background-color: transparent;
    color: #42b883;
  }
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding-bottom: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>