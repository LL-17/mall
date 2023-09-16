<template>
  <header>
    <div class="index-top">
      <div class="index-changecity">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="index-location">
          <path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path>
        </svg>
        <span class="index-title">东莞市人民政府</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="index-arrow">
          <path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path>
        </svg>
      </div>
    </div>
    <div class="search">
      <a class="content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path>
        </svg>
        <span>搜索饿了么商家、商品名称</span>
      </a>
    </div>
  </header>
</template>

<script>

  export default {
    name: 'Header',
  }
</script>

<style>
  .index-top {
    padding: 2.666667vw 3.733333vw 0;
    height: 9.2vw;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    color: #fff;
    display: flex;
    align-items: center;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .index-changecity {
    width: 60%;
    font-weight: 700;
  }
  .index-location {
    width: 3.466667vw;
    height: 4.133333vw;
    fill: #fff;
  }
  .index-title {
    margin: 0 1.333333vw;
    font-size: 0.453333rem;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .index-arrow {
    width: 1.866667vw;
    height: 0.933333vw;
  }
  .search {
    position: sticky;
    z-index: 999;
    top: 0;
    padding: 2vw 3.733333vw;
    margin: -.133333vw 0
  }
  .search,.search:after,.search:before {
    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff)
  }
  .search > .content {
    display: flex;
    width: 100%;
    height: 9.6vw;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 0.266667vw;
    background: #fff;
    color: #999;
    font-size: 0.373333rem;
  }
  .search > .content > svg {
    display: inline-block;
    width: 4.266667vw;
    height: 4.266667vw;
    margin-right: 1.333333vw;
  }
  .search > .content > span {
    font-family: simsun;
  }
</style>
