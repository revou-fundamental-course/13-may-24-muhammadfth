document.addEventListener("DOMContentLoaded", function () {
  // Elements untuk luas
  const inputAlas = document.getElementById("inputAlas");
  const inputTinggi = document.getElementById("inputTinggi");
  const resultLuas = document.getElementById("result__luas");
  const buttonHitungLuas = document.querySelector(".button__hitung-luas");
  const buttonResetLuas = document.querySelector(".button__reset-luas");

  // Elements untuk keliling
  const inputS1 = document.getElementById("S1");
  const inputS2 = document.getElementById("S2");
  const inputS3 = document.getElementById("S3");
  const resultKeliling = document.getElementById("result__keliling");
  const buttonHitungKeliling = document.querySelector(
    ".button__hitung-keliling"
  );
  const buttonResetKeliling = document.querySelector(".button__reset-keliling");

  // Function untuk menghitung luas
  buttonHitungLuas.addEventListener("click", function () {
    const alas = parseFloat(inputAlas.value);
    const tinggi = parseFloat(inputTinggi.value);

    if (isNaN(alas) || isNaN(tinggi)) {
      resultLuas.innerHTML =
        "Mohon masukkan nilai numerik untuk alas dan tinggi.";
      return;
    }

    const luas = 0.5 * alas * tinggi;
    resultLuas.innerHTML = `
            L = 1/2 x a x t <br />
            L = 1/2 x ${alas} x ${tinggi} <br />
            L = ${luas}
        `;
  });

  // Function untuk reset form luas
  buttonResetLuas.addEventListener("click", function () {
    inputAlas.value = "";
    inputTinggi.value = "";
    resultLuas.innerHTML = "";
  });

  // Function untuk menghitung keliling
  buttonHitungKeliling.addEventListener("click", function () {
    const s1 = parseFloat(inputS1.value);
    const s2 = parseFloat(inputS2.value);
    const s3 = parseFloat(inputS3.value);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
      resultKeliling.innerHTML =
        "Mohon masukkan nilai numerik untuk ketiga sisi.";
      return;
    }

    const keliling = s1 + s2 + s3;
    resultKeliling.innerHTML = `
            K = S1 + S2 + S3 <br />
            K = ${s1} + ${s2} + ${s3} <br />
            K = ${keliling}
        `;
  });

  // Function untuk reset form keliling
  buttonResetKeliling.addEventListener("click", function () {
    inputS1.value = "";
    inputS2.value = "";
    inputS3.value = "";
    resultKeliling.innerHTML = "";
  });
});
