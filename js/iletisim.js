new Vue({
  el: '#formApp',
  data: {
    form: JSON.parse(localStorage.getItem('kayitForm')) || {
      adsoyad: '',
      email: '',
      sifre: '',
      telefon: '',
      tarih: '',
      saat: '',
      dosya: '',
      cinsiyet: '',
      sehir: '',
      mesaj: '',
      onay: false
    },
    hatalar: {}
  },
  watch: {
    form: {
      deep: true,
      handler(val) {
        localStorage.setItem('kayitForm', JSON.stringify(val));
      }
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.form.dosya = file ? file.name : '';
    },
    temizle() {
      localStorage.removeItem('kayitForm');
      location.reload();
    },
    jsKontrol() {
      this.hatalar = {};
      const f = this.form;
      const sifreGecerli = f.sifre.length >= 8 && /[a-zA-Z]/.test(f.sifre) && /\d/.test(f.sifre);
      const telefonGecerli = /^\d{9}$/.test(f.telefon);

      if (!f.adsoyad) this.hatalar.adsoyad = true;
      if (!f.email.includes('@')) this.hatalar.email = true;
      if (!sifreGecerli) this.hatalar.sifre = true;
      if (!telefonGecerli) this.hatalar.telefon = true;
      if (!f.tarih) this.hatalar.tarih = true;
      if (!f.saat) this.hatalar.saat = true;
      if (!f.dosya) this.hatalar.dosya = true;
      if (!f.cinsiyet) this.hatalar.cinsiyet = true;
      if (!f.sehir) this.hatalar.sehir = true;
      if (!f.mesaj) this.hatalar.mesaj = true;
      if (!f.onay) this.hatalar.onay = true;

      if (Object.keys(this.hatalar).length === 0) {
        document.querySelector('form').submit();
      }
    },
    vueKontrol() {
      const f = this.form;
      const sifreGecerli = f.sifre.length >= 8 && /[a-zA-Z]/.test(f.sifre) && /\d/.test(f.sifre);
      const telefonGecerli = /^\d{9}$/.test(f.telefon);

      if (!f.adsoyad) return alert('Ad Soyad boş bırakılamaz.');
      if (!f.email.includes('@')) return alert('Geçerli bir e-posta giriniz.');
      if (!sifreGecerli) return alert('Şifre en az 8 karakter ve harf-rakam içermelidir.');
      if (!telefonGecerli) return alert('Telefon 11 haneli olmalı ve sadece rakam içermelidir.');
      if (!f.tarih) return alert('Tarih seçiniz.');
      if (!f.saat) return alert('Saat seçiniz.');
      if (!f.dosya) return alert('Dosya yükleyin.');
      if (!f.cinsiyet) return alert('Cinsiyet seçiniz.');
      if (!f.sehir) return alert('Şehir seçiniz.');
      if (!f.mesaj) return alert('Mesaj yazınız.');
      if (!f.onay) return alert('Kuralları kabul etmelisiniz.');

      document.querySelector('form').submit();
    }
  }
});