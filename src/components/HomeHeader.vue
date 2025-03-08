<template>
  <!-- s01navbar -->
  <section id="s01" class="bg-light">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-light navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/image/gramophone.gif" style="height: 5vh; width: auto" />
          </a>
          <!-- 漢堡條 -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">首頁</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  最新活動
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">音樂劇</a></li>
                  <li><a class="dropdown-item" href="#">展覽</a></li>
                  <li><a class="dropdown-item" href="#">演唱會</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">購買票券</a>
              </li>
              <li class="nav-item" id="s01_control_panel_btn">
                <a
                  class="btn btn-secondary"
                  href="artEvents-member-controlPanel_v1.html"
                  target="_blank"
                  >控制台</a
                >
              </li>
            </ul>
            <div>
              <!-- 可以試著放大頭照 -->
              <span class="h4 tx-007 fw-900 me-3 d-none" id="s01_username_showtext"
                >歡迎會員: <span class="h3 tx-008" id="s01_username_text">XXX</span></span
              >

              <!--bootstrap Live demo -->
              <!-- <a class="btn btn-success" href="artEvents250218-member-control-panel_v1.html">控制台</a> -->
              <button
                class="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
                id="s01_reg_btn"
              >
                註冊
              </button>
              <button
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
                id="s01_login_btn"
              >
                登入
              </button>

              <button class="btn btn-danger d-none" id="s01_logout_btn">登出</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>
