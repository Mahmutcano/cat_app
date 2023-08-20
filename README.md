# Projeye İlişkin Özet

Bu proje, kimlik doğrulama ve yetkilendirme işlemlerini yönetmek amacıyla Next.js ve NextAuth.js kullanılarak geliştirilmiştir. Projenin ana amacı, kullanıcıların giriş yapmasını sağlamak ve bazı özel içeriklere erişimlerini kontrol etmektir.

## Çevresel Değişkenler (`env.local`)

Proje, çevresel değişkenleri kullanarak yapılandırılmıştır. Aşağıda listelenen çevresel değişkenlerin `.env.local` dosyasında tanımlanması gerekmektedir:

- `GOOGLE_CLIENT_ID`: Google OAuth kimlik doğrulama istemcisi ID'si
- `GOOGLE_CLIENT_SECRET`: Google OAuth kimlik doğrulama istemcisi gizli anahtarı
- `NEXTAUTH_SECRET`: NextAuth.js için kullanılan gizli anahtar
- `NEXTAUTH_URL`: NextAuth.js oturum açma URL'si
- `API_URL`: API hizmetinin temel URL'si
- `CAT_API_URL`: Kedi resimlerini sağlayan bir API hizmetinin URL'si

## Yetkilendirme ve Kimlik Doğrulama

Proje, NextAuth.js sağlayıcıları aracılığıyla kimlik doğrulama ve yetkilendirme süreçlerini yönetir. Aşağıda belirtilen sağlayıcılar kullanılır:

- **CredentialsProvider**: Kullanıcı adı ve şifre tabanlı kimlik doğrulama sağlar. Örnek kimlik bilgileri ile doğrulama gerçekleştirilir.
- **GoogleProvider**: Google hesaplarıyla kimlik doğrulama sağlar. Google OAuth istemci kimliği ve gizli anahtar gereklidir.

## Özel Kimlik Doğrulama Mantığı

`CredentialsProvider` sağlayıcısında, özel bir kimlik doğrulama mantığı uygulanır. Örneğin, belirli kullanıcı adı ve şifre ile doğrulama sağlanır. Yanlış kimlik bilgileri girildiğinde bir hata mesajı döndürülür.

## Proje Kullanımı

1. `.env.local` dosyasına yukarıda belirtilen çevresel değişkenleri ekleyin.
2. Proje dosyalarını indirin ve projenin ana dizinine yerleştirin.
3. Terminalde `npm install` komutunu kullanarak gerekli bağımlılıkları yükleyin.
4. Terminalde `npm run dev` komutunu kullanarak projeyi başlatın.

Proje, kullanıcıların kimlik doğrulama süreçlerini yönetmek ve özel içeriklere erişimini denetlemek için temel bir yapı sunar.

## http://localhost:3000 

- Buradan ortamı test edin