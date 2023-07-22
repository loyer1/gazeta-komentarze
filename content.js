const bottomWrapper = document.getElementById('bottom_wrapper');

if (bottomWrapper) {
  const contentWrap = bottomWrapper.querySelector('.content_wrap');
  const hasCommentsApp = contentWrap.querySelector('.withCommentsApp');

  if (!hasCommentsApp) {
    const htmlToAppend = `
    <div class="columns_container withCommentsApp">
      <div class="main_content">
        <p style="color:red;">Ukryte</p>
        <div id="opinions"></div>
        <div id="commentsApp" class="commentsApp"></div>
      </div>
    </div>
  `;

    if (contentWrap) {
      contentWrap.innerHTML += htmlToAppend;
    }
  }
}
