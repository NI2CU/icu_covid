// 2022/12/13
// ask_sina.js
// Author: 幼稚园园长
// SoftWare: WebStorm

(function (){
    //    获取当前时间戳
        let time_ = new Date().getTime();
        let url = `https://news.sina.com.cn/project/fymap/ncp2020_full_data.json?&callback=jsoncallback&callback=jsoncallback&_=${time_}`


       $.ajax({
              url: url,
                type: "get",
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "jsoncallback",
                success: function (data) {
                    console.log(data);
                    window.covid_data = data;
                    add_data2page(data.data)
                }
       })

       let add_data2page = function (data) {
            let s_title = $(".s-title")
            s_title.append(`<div class="s-time">${data.times}</div>`)
           let gntotal = data.gntotal // 累计确诊
           let add_yest = data.add_daily.addcon_new  // 新增确诊
           let present = data.econNum  // 现存确诊
           let present_asymptom = data.asymptomNum  // 现存疑似
           let cure = data.curetotal  // 累计治愈
           let cure_add = data.add_daily.addcure  // 新增治愈
           let death_total = data.deathtotal  // 累计死亡
           let death_add = data.add_daily.adddeath  // 新增死亡
           let jwsr_add = data.add_daily.addjwsr  //
           let local = data.localconNum
           let present_local = data.localExistingNum
           let add_asy = data.addAsymNum
           console.log(`累计确诊${gntotal}`)
           let s_number = $(".s-numbers")
           let ad = `
                        <div class="num">
                            <div class="n-title">累计确诊</div>
                            <div class="n-num">${gntotal}</div>
                            <div class="n-add">${add_yest}</div>
                        </div>
                         <div class="num">
                            <div class="n-title">累计治愈</div>
                            <div class="n-num">${cure}</div>
                            <div class="n-add">+${cure_add}</div>

                        </div>
                        <div class="num">
                            <div class="n-title">死亡人数</div>
                            <div class="n-num">${death_total}</div>
                            <div class="n-add">+${death_add}</div>
                        </div>
                        <div class="num">
                            <div class="n-title">新增本土</div>
                            <div class="n-num">${local}</div>
                        </div>
                        <div class="num">
                            <div class="n-title">新增无症状</div>
                            <div class="n-num">${add_asy}</div>
                        </div>
                        <div class="num">
                            <div class="n-title">现存本土</div>
                            <div class="n-num">${present_local}</div>
                        </div>
                        <div class="num">
                            <div class="n-title">现存确诊</div>
                            <div class="n-num">${present}</div>
                        </div>
                        <div class="num">
                            <div class="n-title">现存疑似</div>
                            <div class="n-num">${present_asymptom}</div>
                        </div>
 
                        <div class="num">
                            <div class="n-title">新增境外</div>
                            <div class="n-num">${jwsr_add.replace('+','')}</div>
           `
           s_number.append(ad)
       }




    })()
