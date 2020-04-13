$(document).on('turbolinks:load', ()=> {
  // 画像用のinputを生成する関数
  const buildFileField = (num)=> {
    const html = `<div class="js-file_group" data-index="${num}">
                    <label class="form__mask__image" for="item_item_images_attributes_${num}_image">
                      <div class="js-file_group__texts">
                        <input class="hidden" type="file" name="item[item_images_attributes][${num}][image]" id="item_item_images_attributes_${num}_image">
                      </div>
                      <div class="js-file_group__texts__text">
                        <div class="js-file_group__texts__text__icon">
                          <i class="fas fa-camera fa-2x icon"></i>
                        </div>
                        <div class="js-file_group__texts__text__instruction">
                          クリックしてファイルをアップロード
                        </div>
                      </div>
                    </label>
                    <p class="js-remove">削除</p>
                  </div>`;
    return html;
  }
  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `<img data-index="${index}" src="${url}" width="100px" height="100px">`;
    return html;
  }

  // file_fieldのnameに動的なindexをつける為の配列
  let fileIndex = [1,2,3,4,5,6,7,8,9,10];
  // 既に使われているindexを除外
  lastIndex = $('.js-file_group:last').data('index');
  fileIndex.splice(0, lastIndex);

  $('.hidden-destroy').hide();

  $('.exhibitionPage__main__contents__image__explanation').on('change', '.form__mask__image', function(e) {
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);

    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('image', blobUrl);
    } else {  // 新規画像追加の処理
      $('.js-file_group__texts__text').append(buildImg(targetIndex, blobUrl));
      // fileIndexの先頭の数字を使ってinputを作る
      $('.exhibitionPage__main__contents__image__explanation').append(buildFileField(fileIndex[0]));
      fileIndex.shift();
      // 末尾の数に1足した数を追加する
      fileIndex.push(fileIndex[fileIndex.length - 1] + 1);
    }
  });

  $('.exhibitionPage__main__contents__image__explanation').on('click', '.js-remove', function() {
    const targetIndex = $(this).parent().data('index');
    // 該当indexを振られているチェックボックスを取得する
    const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
    // もしチェックボックスが存在すればチェックを入れる
    if (hiddenCheck) hiddenCheck.prop('checked', true);

    $(this).parent().remove();
    $(`img[data-index="${targetIndex}"]`).remove();

    // 画像入力欄が0個にならないようにしておく
    if ($('.form__mask__image').length == 0) $('.exhibitionPage__main__contents__image__explanation').append(buildFileField(fileIndex[0]));
  });
});