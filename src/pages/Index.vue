<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="site-heading">
                        <h1>{{ general.title }}</h1>
                        <span class="subheading">{{ general.meta }}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <div v-for="blog in $page.blogs.edges" :key="blog.node.id" class="post-preview">
                    <g-link :to="'/post/' + blog.node.id">
                        <h2 class="post-title">{{ blog.node.title }}</h2>
                    </g-link>
                    <p class="post-meta">
                        Posted by
                        <a href="#!">Start Bootstrap</a>
                        on September 24, 2021
                    </p>
                    <p>
                      <span v-for="tag in blog.node.tags" :key="tag.id">
                        <g-link :to="'/tag/' + tag.id + '/'">{{tag.title}}</g-link>
                        &nbsp;&nbsp;
                      </span>
                    </p>
                </div>
                <!-- Pager-->
                <Pager :info="$page.blogs.pageInfo" />
            </div>
        </div>
    </div>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: 'Home'
  },
  computed: {
    general() {
      return this.$page.general.edges[0].node
    }
  },
  components: {
    Pager
  }
}
</script>
<page-query>
query($page: Int){
  blogs: allStrapiBlog(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node{
        id
        title
        tags {
          id
          title
        }
      }
    }
  }
  general: allStrapiGeneral {
    edges {
      node {
        id
        title
        meta
      }
    }
  }
}
</page-query>
<style>
</style>
