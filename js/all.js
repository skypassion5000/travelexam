//test
// console.log(data.result.records[0].Picture1);
// console.log(data.result.records[0].Name);
// console.log(data.result.records[0].Zone);
// console.log(data.result.records[0].Opentime);
// console.log(data.result.records[0].Add);
// console.log(data.result.records[0].Tel);
// console.log(data.result.records[0].Ticketinfo);
// console.log(data.result.records.length);


//model events view

// 指定DOM
var btn = document.querySelectorAll('.btn');
var select = document.querySelector('#selectArea');
var list = document.querySelector('.list');
var region = document.querySelector('.get-region');

// 監聽與更新
select.addEventListener("change", UpdateDate, false);
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", UpdateDate);
}

// UpdateData
function UpdateDate(e) {
    // console.log(e.target.value);
    // list.innerHTML = '<h1>' + e.target.value + '</h1>';
    // 設定初值
    var itemArea = "";
    var index = data.result.records.length;

    var notAvailable;
    var placeImg;
    var placeName;
    var placeZone;
    var placeTime;
    var placeAddress;
    var placeTel;
    var placeInfo;

    // 資料拼湊
    for (var i = 0; i < index; i++) {
        // console.log(data.result.records[i].Zone);
        if (data.result.records[i].Zone === e.target.value) {
            // console.log(e.target.value);
            notAvailable = "尚未提供"; //未提供資料
            placeImg = data.result.records[i].Picture1; //圖片連結
            placeName = data.result.records[i].Name || notAvailable; //景點名稱
            placeZone = data.result.records[i].Zone || notAvailable; //行政區
            placeTime = data.result.records[i].Opentime || notAvailable; //開放時間
            placeAddress = data.result.records[i].Add || notAvailable; //位址
            placeTel = data.result.records[i].Tel || notAvailable; //電話
            placeInfo = data.result.records[i].Ticketinfo || notAvailable; //免費參觀

            // 撈資料合併
            itemArea += `<li><div class="bigimg" style="background-image: url(${placeImg});"></div>
              <h4>${placeName}</h4>
              <h5>${placeZone}</h5>
              <div class="sights">
                <div class="icon1">
                  <img src="images/icons_clock.png" /><span
                    >${placeTime}</span>
                </div>
                <div class="icon2">
                  <img src="images/icons_pin.png" /><span
                    >${placeAddress}</span>
                </div>
                <div class="icon3 u-clearfix">
                  <img src="images/icons_phone.png" /><span>${placeTel}</span>
                  <div class="u-push-right tag">
                    <img src="images/icons_tag.png" /><span>${placeInfo}</span>
                  </div>
                </div>
              </div>
            </li>`;
        }
    }

    // 寫入網頁
    list.innerHTML = itemArea;
    region.innerHTML = e.target.value;
}