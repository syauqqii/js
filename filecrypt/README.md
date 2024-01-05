# **CATATAN**
> Jika Anda berada di halaman web filecrypt dan melihat daftar tombol yang ditampilkan untuk mengunduh,<br>


langkah-langkah berikut dapat membantu:



1. Buka inspect element (klik kanan, pilih "inspect" atau tekan Ctrl+Shift+I).
2. Pergi ke tab CONSOLE.
3. Salin dan tempelkan kode berikut ke dalam console:
```javascript
document.querySelectorAll('button.download').forEach(
 button => window.open(
  `http://www.filecrypt.cc/Link/${button.getAttribute('onclick').split("'")[1]}.html`,
  '_blank')
);
```
4. Tekan ENTER.
