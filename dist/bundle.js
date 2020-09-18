!function(e){var t={};function a(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(0);var i=function(){function e(){this.store=[],this.renderpage=0,this.filterStatus={roastlevel:!1,pricelevel:!1,regionlevel:!1,countrylevel:!1,checked:!1}}return e.prototype.saveToStore=function(e){this.store.push(e)},e.prototype.sortByHighestPrice=function(){this.store.sort((function(e,t){return e.price-t.price}))},e.prototype.sortByLowestPrice=function(){this.store.sort((function(e,t){return t.price-e.price}))},e.prototype.renderNewPage=function(e){return this.renderpage=e},e.prototype.changeFilterStatus=function(e,t){"roastlevel"===e?this.filterStatus.roastlevel=t:"pricelevel"===e?this.filterStatus.pricelevel=t:"regionlevel"===e?this.filterStatus.regionlevel=t:"countrylevel"===e&&(this.filterStatus.countrylevel=t)},e}(),n=function(e,t,a,i,n,c,l,r){this.id=e,this.company=t,this.brand=a,this.price=i,this.description=n,this.characters=c,this.quantity=l,this.img=r,this.show=!0},c=function(){return Number(new Array(4).fill(null).map((function(e){return Math.floor(10*Math.random())})).join(""))},l=[new n(c(),"Blueprint","Bokkisa",25.3,"This super fun coffee reminds us of watermelon candy, with a funky-sweet lemonade acidity that really makes it pop.",["light","more than $22","South America","Brazil"],6,"../build/assets/images/blueprint_coffee.jpeg"),new n(c(),"Panther","Gorilla Summit",21.2,"This natural process coffee produced by Gerald Mbabazi in Southwestern Uganda is a treat, with funky notes of grilled pineapple and berries, plus a creamy body that reminds us of pistachio ice cream.",["light","$18-$22","Africa"],5,"../build/assets/images/panther_coffee.jpeg"),new n(c(),"Revelator","Petunias",17.35,"With notes of cherry and chocolate, this coffee is harmony in a cup. We have yet to find anyone who questions its sweet, velvety deliciousness",["light-medium","$15-$18","Columbia","South America"],3,"../build/assets/images/revelator_coffee.jpeg"),new n(c(),"Bird Rock","Bird Rock Blend",18.85,"Full bodied, chocolaty, and roasty-toasty; this bold, dark coffee boasts interesting peppery notes that spice up a very comforting cup.",["medium","$18-$22","Colombia","South America"],2,"../build/assets/images/bird-rock.jpeg"),new n(c(),"Pt's","Flatlander Signature Blend",17.35,"Easy does it. And this coffee proves just that. A bittersweet aroma is balanced by a nutty, sweet finish. Here’s to one less complication.",["dark","costa rica","south america","$15-$18"],1,"../build/assets/images/pts.jpeg"),new n(c(),"Irving Farm","Gotham Blend",17.35,"Extra dark, rich, and full of chocolatey indulgence. It may not be the coffee we deserve, but it's definitely the coffee we need right now.",["dark","$15-$18","Asia"],5,"../build/assets/images/irving-farm.jpeg"),new n(c(),"Klatch","Old World Vienna",17.35,"Rich, robust, and nostalgic: this full-bodied cup's hints of spice and dark chocolate invoke an old-world romance.",["medium-dark","$15-$18","Central America"],4,"../build/assets/images/klatch.jpeg"),new n(c(),"Stay Golden","Benti Nenka",29.45,"Delicate notes of peach, a gentle key lime acidity. and a cotton candy sweetness all add up to a coffee that can best be described as: ridiculously pretty.",["medium-dark","more than $22","North America"],2,"../build/assets/images/stay_golden.jpeg"),new n(c(),"Oren's","Two Bridges",17.35,"Sweet balance found in soft citrus acidity and toffee sweetness. So smooth and poetic, we had to write a haiku.",["light","$15-$18","South America","Ecuador"],1,"../build/assets/images/orens.jpeg"),new n(c(),"Sparrows","All Seasons Blend",17.35,"Living up to its name, this clean, sweet cup is perfect all year round - featuring notes of sweet cherry and smooth chocolate.",["dark","$15-$18","South America"],10,"../build/assets/images/sparrow-coffee.jpeg"),new n(c(),"Metric","Peru Dionisio Pintado",20,"Soft and smooth, with notes of sweet vanilla and caramel plus the tiniest pinch of grapefruit zest.",["dark","$18-$22","Asia"],4,"../build/assets/images/metric.jpeg"),new n(c(),"Broadsheet","Laayyoo",25.9,"Traditional notes of blueberry mingle with a watermelon sweetness and green apple acidity. So fresh and so clean, this one puts a big ol' smile on our faces.",["light","South America","Columbia","more than $22"],2,"../build/assets/images/broadsheet.jpeg"),new n(c(),"Greater Goods","Rise and Shine",17.35,"Dark and bold and super sweet, with noticeable notes of dark chocolate. This is the kind of cup that starts off a very good day.",["medium-dark","$15-$18","Central America"],10,"../build/assets/images/coffee-co.jpeg"),new n(c(),"Equator","Peru Cajamarca Fair Trade Organic",20,"This big-bodied Peruvian cup boasts a buttery mouthfeel, notes of dried cherry, and a milk chocolaty sweetness.",["$18-$22","Central America","medium"],12,"../build/assets/images/equator-coffees.jpeg")],r=new i;l.forEach((function(e){r.saveToStore(e)})),console.log(r);var o=r,s=function(){var e=new Array(Math.ceil(o.store.length/6)).fill(null).map((function(e,t){return t+1})).map((function(e){return"<div class='page p-"+e+"'>"+e+"</div>"})).join("");(function(e){return document.querySelector(e)}(".section-assortment__pages-counter")).innerHTML=e,0===o.renderpage&&o.renderNewPage(1);var t=6*o.renderpage-1,a=t-5;return t>o.store.length&&(a=o.store.length-(t-o.store.length)+1,t=o.store.length-1),a<0&&(a=0),o.store.map((function(e,i){if(i>=a&&i<=t&&e.show)return"\n        <div class='section-assortment__goods-card card-"+i+"'>\n        <div class='card-img'>\n        <img src='"+e.img+"' alt='"+e.company+" "+e.brand+"'>\n        </div>\n        <div class='card-companyname'>\n        <p>"+e.company+"</p>\n        </div>\n        <div class='card-productbrand'>\n        <p>"+e.brand+"</p>\n        </div>\n        <div class='card-description'>"+e.description+"</div>\n        <div class='card-price'>The Price is: $"+e.price+"</div>\n        <div class='card-quantityInStore'>Available in store: "+e.quantity+"</div>\n        <input type='button' value=\"Add to Card\" class='card-button'>\n        </div>\n        "})).join("")},u=function(){var e=function(e){return document.querySelector(e)},t=function(e){return document.querySelectorAll(e)};function a(e){o.renderpage=Number(e.target.innerText),f()}function i(e){var a=Object.values(e.target.classList).find((function(e,t){if(0==t)return e}));if(console.log(a),"custom-checkbox"!=a){var i=a.replace(/-/g,"");console.log(Object.values(t("."+a))),Object.values(t("."+a)).map((function(e){e.classList.contains("clicked")?(console.log(23),o.changeFilterStatus(i,!1),console.log(o)):(console.log(32),console.log(o),o.changeFilterStatus(i,!0))}))}f()}function n(e){if(e.target.classList.contains("checked"))return console.log(1),e.target.classList.remove("checked"),o.store.map((function(t){t.characters.map((function(a){if(e.target.value==a)return t.show=!1}))})),f(),e.preventDefault(),!1;console.log(2),e.target.classList.add("checked"),o.store.map((function(e){return e.show=!1})),o.store.map((function(t){t.characters.map((function(a){if(e.target.value==a)return t.show=!0}))})),f()}e(".selected-quantity").innerHTML=""+o.store.length,e("#sort-assortment").addEventListener("change",(function(t){"highest price"===t.target.value.toLowerCase()?o.sortByHighestPrice():"lowest price"===t.target.value.toLowerCase()&&o.sortByLowestPrice();e(".selected-quantity").innerHTML=""+o.store.length,f()})),Object.values(t(".page")).forEach((function(e){e.addEventListener("click",a)})),Object.values(t(".section-assortment__filter")).forEach((function(e){e.addEventListener("click",i)})),Object.values(t(".custom-checkbox")).forEach((function(e){e.addEventListener("change",n)}))},d=function(){return"\n<ul>\n<li class='filter__roast-level roast-level "+(o.filterStatus.roastlevel?"clicked":"")+"'>\n    <div class='filter-header '>\n        <div class='roast-level "+(o.filterStatus.roastlevel?"clicked":"")+"'>Roast Level</div>\n        <div class='roast-level filter-close "+(o.filterStatus.roastlevel?"clicked":"")+'\'></div>\n    </div>\n    <ul>\n        <li><input type="checkbox" name="light" id="light" value=\'light\' class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="light">Light</label></li>\n        <li><input type="checkbox" name="light-medium" id="light-medium" value=\'light-medium\'\n                class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="light-medium">Light-Medium</label></li>\n        <li><input type="checkbox" name="medium" id="medium" value=\'medium\' class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="medium">medium</label></li>\n        <li><input type="checkbox" name="medium-dark" id="medium-dark" value=\'medium-dark\'\n                class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="medium-dark">medium-dark</label></li>\n        <li><input type="checkbox" name="dark" id="dark" value=\'dark\' class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+"'>\n            <label for=\"dark\">Dark</label></li>\n    </ul>\n</li>\n<li class='filter__price-level price-level "+(o.filterStatus.pricelevel?"clicked":"")+"'>\n    <div class='filter-header'>\n        <div class='price-level "+(o.filterStatus.pricelevel?"clicked":"")+"'>Price</div>\n        <div class='price-level filter-close "+(o.filterStatus.pricelevel?"clicked":"")+'\'></div>\n    </div>\n    <ul>\n        <li><input type="checkbox" name="less-than-$15" id="less-than-$15" value=\'less than $15\'\n                class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="less-than-$15">Less than $15</label></li>\n        <li><input type="checkbox" name="$15-$18" id="$15-$18" value=\'$15-$18\'\n                class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="$15-$18">$15-$18</label></li>\n        <li><input type="checkbox" name="$18-$22" id="$18-$22" value=\'$18-$22\'\n                class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="$18-$22">$18-$22</label></li>\n        <li><input type="checkbox" name="more-than-$22" id="more-than-$22" value=\'more than $22\'\n                class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+"'>\n            <label for=\"more-than-$22\">More than $22</label></li>\n    </ul>\n</li>\n<li class='filter__region-level region-level "+(o.filterStatus.regionlevel?"clicked":"")+"'>\n    <div class='filter-header'>\n        <div class='region-level"+(o.filterStatus.regionlevel?"clicked":"")+"'>Region</div>\n        <div class='region-level filter-close "+(o.filterStatus.regionlevel?"clicked":"")+'\'></div>\n    </div>\n    <ul>\n        <li><input type="checkbox" name="africa" id="africa" value=\'africa\' class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="africa">Africa</label></li>\n        <li><input type="checkbox" name="asia" id="asia" vaue=\'asia\' class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="asia">Asia</label></li>\n        <li><input type="checkbox" name="central-america" id="central-america"\n                value=\'central america\' class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="central-america">Central America</label></li>\n        <li><input type="checkbox" name="north-america" id="north-america" value=\'north america\'\n                class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="north-america">North America</label></li>\n        <li><input type="checkbox" name="south-america" id="south-america" value=\'south america\'\n                class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+"'>\n            <label for=\"south-america\">South America</label></li>\n    </ul>\n</li>\n<li class='filter__country-level country-level"+(o.filterStatus.countrylevel?"clicked":"")+"'>\n    <div class='filter-header '>\n        <div class='country-level "+(o.filterStatus.countrylevel?"clicked":"")+"'>Country</div>\n        <div class='country-level filter-close "+(o.filterStatus.countrylevel?"clicked":"")+'\'></div>\n    </div>\n    <ul>\n        <li><input type="checkbox" name="brazil" id="brazil" value=\'brazil\' class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="brazil">Brazil</label></li>\n        <li><input type="checkbox" name="colombia" id="colombia" value=\'colombia\'\n                class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="colombia">Colombia</label></li>\n        <li><input type="checkbox" name="costa-rica" id="costa-rica" value=\'costa rica\'\n                class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="costa-rica">Costa Rica</label></li>\n        <li><input type="checkbox" name="ecuador" id="ecuador" value=\'ecuador\'\n                class=\'custom-checkbox '+(o.filterStatus.checked?"checked":"")+'\'>\n            <label for="ecuador">Ecuador</label></li>\n    </ul>\n</li>\n</ul>'},h=function(){var e=function(e){return document.querySelector(e)};e(".section-assortment__filter").innerHTML="\n    "+d()+"\n    ",e(".section-assortment__goods").innerHTML="\n    "+s()+"\n    ",u()};h();var f=h}]);