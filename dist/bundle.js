!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var i=function(){function e(){this.store=[],this.renderpage=0}return e.prototype.saveToStore=function(e){this.store.push(e)},e.prototype.sortByHighestPrice=function(){this.store.sort((function(e,t){return e.price-t.price}))},e.prototype.sortByLowestPrice=function(){this.store.sort((function(e,t){return t.price-e.price}))},e.prototype.renderNewPage=function(e){return this.renderpage=e},e.prototype.changeFilterStatus=function(e,t){},e}(),r=function(e,t,n,i,r,a,o,s){this.id=e,this.company=t,this.brand=n,this.price=i,this.description=r,this.characters=a,this.quantity=o,this.img=s,this.show=!0},a=function(){return Number(new Array(4).fill(null).map((function(e){return Math.floor(10*Math.random())})).join(""))},o=[new r(a(),"Blueprint","Bokkisa",25.3,"This super fun coffee reminds us of watermelon candy, with a funky-sweet lemonade acidity that really makes it pop.",["light","more than $22","South America","Brazil"],6,"../build/assets/images/blueprint_coffee.jpeg"),new r(a(),"Panther","Gorilla Summit",21.2,"This natural process coffee produced by Gerald Mbabazi in Southwestern Uganda is a treat, with funky notes of grilled pineapple and berries, plus a creamy body that reminds us of pistachio ice cream.",["light","$18-$22","Africa"],5,"../build/assets/images/panther_coffee.jpeg"),new r(a(),"Revelator","Petunias",17.35,"With notes of cherry and chocolate, this coffee is harmony in a cup. We have yet to find anyone who questions its sweet, velvety deliciousness",["light-medium","$15-$18","Columbia","South America"],3,"../build/assets/images/revelator_coffee.jpeg"),new r(a(),"Bird Rock","Bird Rock Blend",18.85,"Full bodied, chocolaty, and roasty-toasty; this bold, dark coffee boasts interesting peppery notes that spice up a very comforting cup.",["medium","$18-$22","Colombia","South America"],2,"../build/assets/images/bird-rock.jpeg"),new r(a(),"Pt's","Flatlander Signature Blend",17.35,"Easy does it. And this coffee proves just that. A bittersweet aroma is balanced by a nutty, sweet finish. Here’s to one less complication.",["dark","costa rica","south america","$15-$18"],1,"../build/assets/images/pts.jpeg"),new r(a(),"Irving Farm","Gotham Blend",17.35,"Extra dark, rich, and full of chocolatey indulgence. It may not be the coffee we deserve, but it's definitely the coffee we need right now.",["dark","$15-$18","Asia"],5,"../build/assets/images/irving-farm.jpeg"),new r(a(),"Klatch","Old World Vienna",17.35,"Rich, robust, and nostalgic: this full-bodied cup's hints of spice and dark chocolate invoke an old-world romance.",["medium-dark","$15-$18","Central America"],4,"../build/assets/images/klatch.jpeg"),new r(a(),"Stay Golden","Benti Nenka",29.45,"Delicate notes of peach, a gentle key lime acidity. and a cotton candy sweetness all add up to a coffee that can best be described as: ridiculously pretty.",["medium-dark","more than $22","North America"],2,"../build/assets/images/stay_golden.jpeg"),new r(a(),"Oren's","Two Bridges",17.35,"Sweet balance found in soft citrus acidity and toffee sweetness. So smooth and poetic, we had to write a haiku.",["light","$15-$18","South America","Ecuador"],1,"../build/assets/images/orens.jpeg"),new r(a(),"Sparrows","All Seasons Blend",17.35,"Living up to its name, this clean, sweet cup is perfect all year round - featuring notes of sweet cherry and smooth chocolate.",["dark","$15-$18","South America"],10,"../build/assets/images/sparrow-coffee.jpeg"),new r(a(),"Metric","Peru Dionisio Pintado",20,"Soft and smooth, with notes of sweet vanilla and caramel plus the tiniest pinch of grapefruit zest.",["dark","$18-$22","Asia"],4,"../build/assets/images/metric.jpeg"),new r(a(),"Broadsheet","Laayyoo",25.9,"Traditional notes of blueberry mingle with a watermelon sweetness and green apple acidity. So fresh and so clean, this one puts a big ol' smile on our faces.",["light","South America","Columbia","more than $22"],2,"../build/assets/images/broadsheet.jpeg"),new r(a(),"Greater Goods","Rise and Shine",17.35,"Dark and bold and super sweet, with noticeable notes of dark chocolate. This is the kind of cup that starts off a very good day.",["medium-dark","$15-$18","Central America"],10,"../build/assets/images/coffee-co.jpeg"),new r(a(),"Equator","Peru Cajamarca Fair Trade Organic",20,"This big-bodied Peruvian cup boasts a buttery mouthfeel, notes of dried cherry, and a milk chocolaty sweetness.",["$18-$22","Central America","medium"],12,"../build/assets/images/equator-coffees.jpeg")],s=new i;o.forEach((function(e){s.saveToStore(e)})),console.log(s);var l=s,c=function(){var e=new Array(Math.ceil(l.store.length/6)).fill(null).map((function(e,t){return t+1})).map((function(e){return"<div class='page p-"+e+"'>"+e+"</div>"})).join("");(function(e){return document.querySelector(e)}(".section-assortment__pages-counter")).innerHTML=e,0===l.renderpage&&l.renderNewPage(1);var t=6*l.renderpage-1,n=t-5;return t>l.store.length&&(n=l.store.length-(t-l.store.length)+1,t=l.store.length-1),n<0&&(n=0),l.store.map((function(e,i){if(i>=n&&i<=t&&e.show)return"\n        <div class='section-assortment__goods-card card-"+i+"'>\n        <div class='card-img'>\n        <img src='"+e.img+"' alt='"+e.company+" "+e.brand+"'>\n        </div>\n        <div class='card-companyname'>\n        <p>"+e.company+"</p>\n        </div>\n        <div class='card-productbrand'>\n        <p>"+e.brand+"</p>\n        </div>\n        <div class='card-description'>"+e.description+"</div>\n        <div class='card-price'>The Price is: $"+e.price+"</div>\n        <div class='card-quantityInStore'>Available in store: "+e.quantity+"</div>\n        <input type='button' value=\"Add to Card\" class='card-button'>\n        </div>\n        "})).join("")},u=function(){function e(e,t,n,i){this.filterName=e,this.filterClassName=t,this.filterStatus=n,this.filterClicked=i,this.innerFilter=[]}return e.prototype.createInnerFilter=function(e){this.innerFilter.push(e)},e}(),d=function(e,t,n){this.innerFilterName=e,this.innerFilterId=t,this.innerFilterStatus=n},f=new u("Roast Level","roast-level",!1,!1),h=new u("Price","price-level",!1,!1),m=new u("Region","region-level",!1,!1),p=new u("Country","country-level",!1,!1),g=[new d("Light","light",!1),new d("Light-Medium","light-medium",!1),new d("Medium","medium",!1),new d("Medium-Dark","medium-dark",!1),new d("Dark","dark",!1)],v=[new d("Less than $15","less-than-$15",!1),new d("$15-$18","$15-$18",!1),new d("$18-$22","$18-$22",!1),new d("More than $22","more-than-$22",!1)],b=[new d("Africa","africa",!1),new d("Asia","asia",!1),new d("Central America","central-america",!1),new d("North America","north-america",!1),new d("South America","south-america",!1)],y=[new d("Brazil","brazil",!1),new d("Colombia","colombia",!1),new d("Costa Rica","costa-rica",!1),new d("Ecuador","ecuador",!1)];g.map((function(e){f.createInnerFilter(e)})),v.map((function(e){h.createInnerFilter(e)})),b.map((function(e){m.createInnerFilter(e)})),y.map((function(e){p.createInnerFilter(e)}));var w=[f,h,p,m];console.log(w);var k=function(){return"\n<ul>\n<li class='filter__roast-level roast-level "+(f.filterStatus?"clicked":"")+"'>\n    <div class='filter-header '>\n        <div class='roast-level "+(f.filterStatus?"clicked":"")+"'>Roast Level</div>\n        <div class='roast-level filter-close "+(f.filterStatus?"clicked":"")+"'></div>\n    </div>\n    <ul>\n    "+f.innerFilter.map((function(e){return'<li><input type="checkbox" name="'+e.innerFilterId+'" id="'+e.innerFilterId+"\" value='"+e.innerFilterName+"' class='custom-checkbox "+(e.innerFilterStatus?"checked":"")+"'>\n        <label for=\""+e.innerFilterId+'">'+e.innerFilterName+"</label></li>"})).join("")+"\n    </ul>\n</li>\n<li class='filter__price-level price-level "+(h.filterStatus?"clicked":"")+"'>\n    <div class='filter-header'>\n        <div class='price-level "+(h.filterStatus?"clicked":"")+"'>Price</div>\n        <div class='price-level filter-close "+(h.filterStatus?"clicked":"")+"'></div>\n    </div>\n    <ul>\n    "+h.innerFilter.map((function(e){return'<li><input type="checkbox" name="'+e.innerFilterId+'" id="'+e.innerFilterId+"\" value='"+e.innerFilterName+"' class='custom-checkbox "+(e.innerFilterStatus?"checked":"")+"'>\n          <label for=\""+e.innerFilterId+'">'+e.innerFilterName+"</label></li>"})).join("")+"\n    </ul>\n</li>\n<li class='filter__region-level region-level "+(m.filterStatus?"clicked":"")+"'>\n    <div class='filter-header'>\n        <div class='region-level "+(m.filterStatus?"clicked":"")+"'>Region</div>\n        <div class='region-level filter-close "+(m.filterStatus?"clicked":"")+"'></div>\n    </div>\n    <ul>\n    "+m.innerFilter.map((function(e){return'<li><input type="checkbox" name="'+e.innerFilterId+'" id="'+e.innerFilterId+"\" value='"+e.innerFilterName+"' class='custom-checkbox "+(e.innerFilterStatus?"checked":"")+"'>\n          <label for=\""+e.innerFilterId+'">'+e.innerFilterName+"</label></li>"})).join("")+"\n    </ul>\n</li>\n<li class='filter__country-level country-level "+(p.filterStatus?"clicked":"")+"'>\n    <div class='filter-header '>\n        <div class='country-level "+(p.filterStatus?"clicked":"")+"'>Country</div>\n        <div class='country-level filter-close "+(p.filterStatus?"clicked":"")+"'></div>\n    </div>\n    <ul>\n    "+p.innerFilter.map((function(e){return'<li><input type="checkbox" name="'+e.innerFilterId+'" id="'+e.innerFilterId+"\" value='"+e.innerFilterName+"' class='custom-checkbox "+(e.innerFilterStatus?"checked":"")+"'>\n          <label for=\""+e.innerFilterId+'">'+e.innerFilterName+"</label></li>"})).join("")+"\n    </ul>\n</li>\n</ul>"},S=function(){var e=function(e){return document.querySelector(e)};e(".section-assortment__filter").innerHTML="\n    "+k()+"\n    ",e(".section-assortment__goods").innerHTML="\n    "+c()+"\n    "};S();var F=S;!function(){var e=function(e){return document.querySelector(e)},t=function(e){return document.querySelectorAll(e)};function n(e){l.renderpage=Number(e.target.innerText),F()}function i(e){var n=Object.values(t(".page")).length;console.log(n),e.target.classList.contains("back")&&(l.renderpage-=1,l.renderpage<0&&(l.renderpage=1)),e.target.classList.contains("forward")&&(l.renderpage+=1,l.renderpage>n&&(l.renderpage=3)),F()}function r(e){console.log(e);var t=Object.values(e.target.classList).find((function(e){return w.map((function(t){if(e==t.filterClassName)return t}))})),n=w.find((function(e){if(e.filterClassName==t)return e}));"custom-checkbox"!=t?(n.filterClicked||n.filterStatus||(n.filterStatus=!0),n.filterClicked&&(n.filterStatus=!1,n.filterClicked=!0),n.filterClicked?n.filterClicked=!1:n.filterClicked=!0):"custom-checkbox"==t&&(console.log("click custom-checkbox"),console.log(e.target.value),console.log(n),console.log(e.currentTarget)),F()}function a(e){if(console.log(e.target.value),e.target.classList.contains("checked"))return console.log(1),e.target.classList.remove("checked"),l.store.map((function(t){t.characters.map((function(n){if(e.target.value==n)return t.show=!1}))})),e.preventDefault(),!1;console.log(2),e.target.classList.add("checked"),l.store.map((function(e){return e.show=!1})),l.store.map((function(t){t.characters.map((function(n){if(e.target.value==n)return t.show=!0}))}))}e(".selected-quantity").innerHTML=""+l.store.length,e("#sort-assortment").addEventListener("change",(function(t){"highest price"===t.target.value.toLowerCase()?l.sortByHighestPrice():"lowest price"===t.target.value.toLowerCase()&&l.sortByLowestPrice();e(".selected-quantity").innerHTML=""+l.store.length,F()})),Object.values(t(".page")).forEach((function(e){e.addEventListener("click",n)})),Object.values(t(".arrow")).forEach((function(e){e.addEventListener("click",i)})),Object.values(t(".section-assortment__filter")).forEach((function(e){e.addEventListener("click",r)})),Object.values(t(".custom-checkbox")).forEach((function(e){e.addEventListener("change",a)}))}()}]);