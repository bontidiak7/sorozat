const qCsuszka = document.getElementById("qCsuszka");
const qErtekSzoveg = document.getElementById("qErtek");
const tagLista = document.getElementById("tagLista");
const elso10OsszegSzoveg = document.getElementById("elso10Osszeg");
const vegtelenOsszegSzoveg = document.getElementById("vegtelenOsszeg");

const elsoTag = 1;

function frissites() {
    const q = parseFloat(qCsuszka.value);
    qErtekSzoveg.textContent = q.toFixed(2);

    tagLista.innerHTML = "";

    let osszeg10 = 0;
    let maxAbs = 0;
    for (let i = 1; i <= 10; i++) {
        const aktualisTag = elsoTag * Math.pow(q, i - 1);
        if (Math.abs(aktualisTag) > maxAbs) maxAbs = Math.abs(aktualisTag);
    }


    for (let i = 1; i <= 10; i++) {
        const aktualisTag = elsoTag * Math.pow(q, i - 1);
        osszeg10 += aktualisTag;

        const sav = document.createElement("div");
        sav.classList.add("tag-sav");
        if (aktualisTag >= 0) {
            sav.classList.add("tag-pozitiv");
        } else {
            sav.classList.add("tag-negativ");
        }

        const szelesseg = (Math.abs(aktualisTag) / maxAbs) * 100;
        sav.style.width = szelesseg + "%";

        sav.textContent = aktualisTag.toFixed(4);
        tagLista.appendChild(sav);
    }
}

    elso10OsszegSzoveg.textContent = osszeg10.toFixed(4);

    if (Math.abs(q) < 1) {
        const osszegVeg = elsoTag / (1 - q);
        vegtelenOsszegSzoveg.textContent = osszegVeg.toFixed(4);
    } else {
        vegtelenOsszegSzoveg.textContent = "Nem létezik (|q| ≥ 1)";
    }

qCsuszka.addEventListener("input", frissites);
frissites();