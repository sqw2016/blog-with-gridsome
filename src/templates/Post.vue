<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" :style="{
      backgroundImage: `url('${this.domain + $page.blog.cover.url}')`
    }">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="post-heading">
                        <h1>{{ $page.blog.title }}</h1>
                        <span class="meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on August 24, 2021
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Post Content-->
    <article>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    {{ $page.blog.content }}
                </div>
            </div>
        </div>
    </article>
  </Layout>
</template>

<script>
export default {
  name: 'PostPage'
}
</script>
<page-query>
query($id: ID!) {
  blog: strapiBlog(id: $id) {
    title
    content
    cover {
      url
    }
  }
}
</page-query>
<style>

</style>