import"./GoldCalculator.astro_astro_type_script_index_0_lang.BZtJEfUj.js";async function l(){try{const e=await(await fetch("https://saudi-gold-api.2019ag138.workers.dev")).json(),a=new Date().toLocaleTimeString("ar-SA",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Riyadh"});document.querySelectorAll(".live-timestamp").forEach(t=>t.textContent=a);const o=document.getElementById("rates-table-body");o&&e.rates&&(o.innerHTML=Object.values(e.rates).map(t=>`
          <tr class="hover:bg-amber-50/40 transition-colors">
            <td class="py-3.5 px-4 font-bold text-gray-900">${t.karat} <span class="text-xs text-gray-500 font-normal">(${t.purity})</span></td>
            <td class="py-3.5 px-4 text-emerald-700 font-semibold">${t.gram_buy} ر.س</td>
            <td class="py-3.5 px-4 text-gray-800 font-semibold">${t.gram_sell} ر.س</td>
            <td class="py-3.5 px-4 text-gray-500 font-mono" dir="ltr">$${t.usd}</td>
          </tr>
        `).join("")+`
          <tr class="hover:bg-amber-50/40 transition-colors bg-gray-50">
            <td class="py-3.5 px-4 font-bold text-gray-900 border-t border-gray-100">تولة الذهب (11.66 جرام)</td>
            <td class="py-3.5 px-4 text-emerald-700 font-semibold border-t border-gray-100">${e.units.tola_sar} ر.س</td>
            <td class="py-3.5 px-4 text-gray-800 font-semibold border-t border-gray-100">-</td>
            <td class="py-3.5 px-4 text-gray-500 font-mono border-t border-gray-100" dir="ltr">-</td>
          </tr>
          <tr class="hover:bg-amber-50/40 transition-colors bg-gray-50">
            <td class="py-3.5 px-4 font-bold text-gray-900">أوقية / أونصة الذهب</td>
            <td class="py-3.5 px-4 text-emerald-700 font-semibold">${e.units.ounce_sar} ر.س</td>
            <td class="py-3.5 px-4 text-gray-800 font-semibold">-</td>
            <td class="py-3.5 px-4 text-gray-500 font-mono" dir="ltr">$${e.spot_usd_oz}</td>
          </tr>
        `);const d=document.getElementById("bullion-table-body");if(d&&e.rates["24K"]&&e.units){const t=parseFloat(e.rates["24K"].gram_buy),r=parseFloat(e.units.pound_21k_sar);d.innerHTML=`
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">جنيه الذهب السعودي (8 جرام عيار 21)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${r.toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-700 font-medium text-xs md:text-sm">معفى من الضريبة</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">نصف جنيه ذهب (4 جرام عيار 21)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${(r/2).toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-700 font-medium text-xs md:text-sm">معفى من الضريبة</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">سبيكة ذهب 1 جرام (عيار 24)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${(t*1).toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-700 font-medium text-xs md:text-sm">معفى (نقاء 99%)</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">سبيكة ذهب 5 جرام (عيار 24)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${(t*5).toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-700 font-medium text-xs md:text-sm">معفى (نقاء 99%)</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">سبيكة ذهب 10 جرام (عيار 24)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${(t*10).toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-700 font-medium text-xs md:text-sm">معفى (نقاء 99%)</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">سبيكة ذهب 50 جرام (عيار 24)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${(t*50).toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-700 font-medium text-xs md:text-sm">معفى (نقاء 99%)</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">سبيكة ذهب 100 جرام (عيار 24)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${(t*100).toFixed(2)} ر.س</td><td class="py-3.5 px-4 text-emerald-700 font-medium text-xs md:text-sm">معفى (نقاء 99%)</td></tr>
          <tr class="hover:bg-amber-50/40 transition-colors"><td class="py-3.5 px-4 font-bold text-gray-900">كيلو ذهب (1000 جرام عيار 24)</td><td class="py-3.5 px-4 text-gold-700 font-bold">${e.units.kilo_sar} ر.س</td><td class="py-3.5 px-4 text-emerald-700 font-medium text-xs md:text-sm">معفى (نقاء 99%)</td></tr>
        `}window.currentGram24K=parseFloat(e.rates["24K"].gram_buy),typeof window.recalculateGold=="function"&&window.recalculateGold()}catch(s){console.error("Error fetching live gold rates:",s)}}l();
