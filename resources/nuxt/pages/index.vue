<template>
  <section class="container">
    <my-article v-for="article in articles" :article="article" :key="article.id"/>
  </section>
</template>

<script>
  import MyArticle from '~/components/Article.vue'
  export default {
    components:{
      MyArticle
    },
    computed:{
      articles(){
        return this.$store.state.articles
      }
    },
    fetch ({store, params}) {
      if (!store.state.articles) {
        return store.dispatch('getArticles')
      }
    }
  }
</script>
