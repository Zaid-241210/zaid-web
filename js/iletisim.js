new Vue({
  el: '#formApp',
  data: {
    form: {
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
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.form.dosya = file ? file.name : '';
    },
    jsKontrol() {
      this.hatalar = {};
      const f = this.form;

      if (!f.adsoyad) this.hatalar.adsoyad = true;
      if (!f.email.includes('@')) this.hatalar.email = true;
      if (!f.sifre) this.hatalar.sifre = true;
      if (!f.telefon) this.hatalar.telefon = true;
      if (!f.tarih) this.hatalar.tarih = true;
      if (!f.saat) this.hatalar.saat = true;
      if (!f.dosya) this.hatalar.dosya = true;
      if (!f.cinsiyet) this.hatalar.cinsiyet = true;
      if (!f.sehir) this.hatalar.sehir = true;
      if (!f.mesaj) this.hatalar.mesaj = true;
      if (!f.onay) this.hatalar.onay = true;
    },
    vueKontrol() {
      const f = this.form;
      if (!f.adsoyad) return alert('Ad Soyad boş bırakılamaz.');
      if (!f.email.includes('@')) return alert('Geçerli bir e-posta giriniz.');
      if (!f.sifre) return alert('Şifre boş bırakılamaz.');
      if (!f.telefon) return alert('Telefon boş bırakılamaz.');
      if (!f.tarih) return alert('Tarih seçiniz.');
      if (!f.saat) return alert('Saat seçiniz.');
      if (!f.dosya) return alert('Dosya yükleyin.');
      if (!f.cinsiyet) return alert('Cinsiyet seçiniz.');
      if (!f.sehir) return alert('Şehir seçiniz.');
      if (!f.mesaj) return alert('Mesaj yazınız.');
      if (!f.onay) return alert('Kuralları kabul etmelisiniz.');

      alert('Form başarıyla gönderildi ✅');
    }
  }
});