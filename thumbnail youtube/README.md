# **CATATAN**
> kode untuk mengambil foto thumbnail yang ada di youtube by `video yang ingin di play`
Pastikan berada pada video youtube yang ingin ditonton, serta belum di klik mulai / masih tahap awal sebelum mulai
1. Copy kode berikut ke (inspect element => tab console)
```javascript
window.open(document.querySelector(".ytp-cued-thumbnail-overlay-image").getAttribute('style').split('"')[1]);
```
2. Lalu PASTE
3. ENTER
