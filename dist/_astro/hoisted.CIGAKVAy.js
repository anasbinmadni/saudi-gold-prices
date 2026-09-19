async function m(){try{const t=await(await fetch("https://saudi-gold-api.2019ag138.workers.dev")).json();document.querySelectorAll(".live-timestamp").forEach(e=>e.textContent=t.timestamp);const s=document.getElementById("rates-table-body");s&&t.rates&&(s.innerHTML=Object.values(t.rates).map(e=>`
          <tr class="hover:bg-amber-50/40 transition-colors">
            <td class="py-3.5 px-4 font-bold text-gray-900">${e.karat} <span class="text-xs text-gray-500 font-normal">(${e.purity})</span></td>
            <td class="py-3.5 px-4 text-emerald-700 font-semibold">${e.gram_buy} ر.س</td>
            <td class="py-3.5 px-4 text-gray-800 font-semibold">${e.gram_sell} ر.س</td>
            <td class="py-3.5 px-4 text-gray-500 font-mono" dir="ltr">$${e.usd}</td>
          </tr>
        `).join("")+`
          <tr class="hover:bg-amber-50/40 transition-colors bg-gray-50">
            <td class="py-3.5 px-4 font-bold text-gray-900 border-t border-gray-100">تولة الذهب (11.66 جرام)</td>
            <td class="py-3.5 px-4 text-emerald-700 font-semibold border-t border-gray-100">${t.units.tola_sar} ر.س</td>
            <td class="py-3.5 px-4 text-gray-800 font-semibold border-t border-gray-100">-</td>
            <td class="py-3.5 px-4 text-gray-500 font-mono border-t border-gray-100" dir="ltr">-</td>
          </tr>
          <tr class="hover:bg-amber-50/40 transition-colors bg-gray-50">
            <td class="py-3.5 px-4 font-bold text-gray-900">أوقية / أونصة الذهب</td>
            <td class="py-3.5 px-4 text-emerald-700 font-semibold">${t.units.ounce_sar} ر.س</td>
            <td class="py-3.5 px-4 text-gray-800 font-semibold">-</td>
            <td class="py-3.5 px-4 text-gray-500 font-mono" dir="ltr">$${t.spot_usd_oz}</td>
          </tr>
        `);const d=document.getElementById("bullion-table-body");if(d&&t.rates["24K"]&&t.units){const e=parseFloat(t.rates["24K"].gram_buy),a=parseFloat(t.units.pound_21k_sar);d.innerHTML=`
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">جنيه الذهب السعودي (8 جرام عيار 21)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${a.toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-600 font-medium text-xs md:text-sm">معفى من الضريبة</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">نصف جنيه ذهب (4 جرام عيار 21)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${(a/2).toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-600 font-medium text-xs md:text-sm">معفى من الضريبة</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">سبيكة ذهب 1 جرام (عيار 24)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${(e*1).toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-600 font-medium text-xs md:text-sm">معفى (نقاء 99%)</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">سبيكة ذهب 5 جرام (عيار 24)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${(e*5).toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-600 font-medium text-xs md:text-sm">معفى (نقاء 99%)</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">سبيكة ذهب 10 جرام (عيار 24)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${(e*10).toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-600 font-medium text-xs md:text-sm">معفى (نقاء 99%)</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">سبيكة ذهب 50 جرام (عيار 24)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${(e*50).toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-600 font-medium text-xs md:text-sm">معفى (نقاء 99%)</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">سبيكة ذهب 100 جرام (عيار 24)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${(e*100).toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-600 font-medium text-xs md:text-sm">معفى (نقاء 99%)</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">كيلو ذهب (1000 جرام عيار 24)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${t.units.kilo_sar} ر.س</td><td class="py-3.5 px-4 text-emerald-600 font-medium text-xs md:text-sm">معفى (نقاء 99%)</td></tr>
        `}window.currentGram24K=parseFloat(t.rates["24K"].gram_buy),typeof window.recalculateGold=="function"&&window.recalculateGold()}catch(o){console.error("Error fetching live gold rates:",o)}}m();function l(){const o=document.getElementById("calc-karat").value,t=parseFloat(document.getElementById("calc-weight").value)||0,n=parseFloat(document.getElementById("calc-making").value)||0,s=window.currentGram24K||315.5,d={24:1,22:22/24,21:21/24,18:18/24},a=s*d[o]*t,r=n*t,c=r*.15,x=a+r+c;document.getElementById("res-gold-val").textContent=a.toFixed(2),document.getElementById("res-making-val").textContent=r.toFixed(2),document.getElementById("res-tax-val").textContent=c.toFixed(2),document.getElementById("res-total-val").textContent=x.toFixed(2)}["calc-karat","calc-weight","calc-making"].forEach(o=>{document.getElementById(o)?.addEventListener("input",l)});window.recalculateGold=l;l();
