import Link from 'next/link';
import Image from 'next/image';
import { getAllServices } from '../data/services';

export default function Home() {
  const services = getAllServices();
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">הקסם של האירוע</h1>
        <p className="text-xl md:text-2xl mb-8">הפקת אירועים מושלמים לכל רגע מיוחד בחיים שלכם</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition duration-300">
            צרו קשר עכשיו
          </Link>
          <a href="tel:+972501234567" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition duration-300">
            התקשרו אלינו
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">קצת עלינו</h2>
          <p className="text-lg mb-8">
            אנחנו בהקסם של האירוע מתמחים בהפקת אירועים בלתי נשכחים כבר למעלה מעשור. 
            הצוות המקצועי שלנו מלווה אתכם משלב התכנון ועד לביצוע המושלם.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">השירותים שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.id} className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="relative h-60 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.shortDescription}</p>
                  <div className="text-blue-600 font-bold group-hover:text-blue-800 transition">
                    למידע נוסף
                    <span className="mr-2">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gray-50 rounded-lg my-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">מה הלקוחות אומרים עלינו</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4">"הפקה מושלמת לחתונה שלנו. כל פרט היה מדויק וכל החלומות התגשמו!"</p>
              <p className="font-bold">- מיכל ואבי, חתונה</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4">"הבר מצווה הייתה מעל ומעבר למה שחלמנו. המקצועיות והשירות היו ברמה הכי גבוהה."</p>
              <p className="font-bold">- משפחת כהן, בר מצווה</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center py-12 md:py-16 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">מוכנים להפוך את החלום למציאות?</h2>
        <p className="text-xl mb-8">צרו איתנו קשר עוד היום ונתחיל לתכנן את האירוע המושלם</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition duration-300">
            השאירו פרטים
          </Link>
          <a href="https://wa.me/972501234567" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition duration-300 flex items-center">
            <span className="ml-2">WhatsApp</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
} 