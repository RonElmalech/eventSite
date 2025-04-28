// This file serves as a placeholder for CMS data
// In a real implementation, this would be fetched from a headless CMS like Sanity/Strapi/Contentful
import { createServiceSlug } from '../utils/slugify';

export const homeData = {
  hero: {
    title: "הקסם באירוע - החגיגה שלכם, הקסם שלנו!",
    subtitle: "אנו מתמחים בהפקת אירועים מושלמים המותאמים לצרכים והחלומות שלך",
    ctaText: "צור קשר עכשיו",
    ctaLink: "/contact"
  },
  intro: {
    title: "אודותינו",
    content: "הקסם באירוע הוא חברת הפקת אירועים מקצועית עם ניסיון רב בהפקת אירועים מסוגים שונים. אנו מאמינים כי כל אירוע הוא ייחודי ודורש תשומת לב מיוחדת לפרטים. צוות המומחים שלנו מחויב להפוך כל אירוע לחוויה בלתי נשכחת עבורך ועבור האורחים שלך."
  },
  featuredServices: [
    {
      id: 1,
      title: "חתונות",
      description: "הפקת חתונות מושלמות עם תשומת לב לכל פרט",
      imageUrl: "./images/wedding.jpg"
    },
    {
      id: 2,
      title: "אירועים עסקיים",
      description: "כנסים, השקות מוצרים ואירועי חברה מקצועיים",
      imageUrl: "./images/corporate.jpg"
    },
    {
      id: 3,
      title: "ימי הולדת",
      description: "חגיגות ימי הולדת מיוחדות לכל גיל",
      imageUrl: "./images/birthday.jpg"
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "מיכל ויוסי כהן",
      role: "חתונה",
      date: "מרץ 2023",
      quote: "האירוע היה מושלם! הצוות המקצועי והאדיב דאג לכל פרט ופרט, וכל האורחים לא מפסיקים להחמיא. תודה רבה!",
      imageUrl: "./assets/testimonials/1.jpg"
    },
    {
      id: 2,
      name: "משפחת לוי",
      role: "בר מצווה",
      date: "יוני 2023",
      quote: "הבר מצווה של הבן שלנו הייתה חוויה מדהימה! הקסם באירוע דאגו לכל הפרטים הקטנים והפכו את היום למושלם.",
      imageUrl: "./assets/testimonials/2.jpg"
    },
    {
      id: 3,
      name: "טל דורון",
      role: "אירוע חברה",
      date: "ספטמבר 2023",
      quote: "הפקתם לנו אירוע עסקי ברמה גבוהה ומקצועית. הכל התנהל בצורה חלקה ומושלמת. בהחלט נשתף פעולה שוב!",
      imageUrl: "./assets/testimonials/3.jpg"
    }
  ]
};

export const servicesData = {
  title: "השירותים שלנו",
  subtitle: "אנו מציעים מגוון רחב של שירותי הפקת אירועים מותאמים אישית לצרכים שלכם",
  services: [
    {
      id: 1,
      title: "חתונות",
      description: "הפקת חתונות מושלמות עם תשומת לב לכל פרט",
      shortDescription: "הפכו את היום המיוחד שלכם לבלתי נשכח עם שירותי חתונה המותאמים אישית",
      imageUrl: "./images/services/wedding.jpg",
      get slug() {
        return createServiceSlug(this.title);
      }
    },
    {
      id: 2,
      title: "אירועים עסקיים",
      description: "כנסים, השקות מוצרים ואירועי חברה מקצועיים",
      shortDescription: "אירועים עסקיים מקצועיים שמשאירים רושם ומשיגים את המטרות שלכם",
      imageUrl: "./images/services/business.jpg",
      get slug() {
        return createServiceSlug(this.title);
      }
    },
    {
      id: 3,
      title: "ימי הולדת",
      description: "חגיגות ימי הולדת מיוחדות לכל גיל",
      shortDescription: "הפקת ימי הולדת מיוחדים לכל גיל עם רעיונות יצירתיים",
      imageUrl: "./images/services/birthday.jpg",
      get slug() {
        return createServiceSlug(this.title);
      }
    },
    {
      id: 4,
      title: "בר/בת מצווה",
      description: "אירועי בר/בת מצווה מרשימים ובלתי נשכחים",
      shortDescription: "חגגו את הצעד המשמעותי הזה עם אירוע בר מצווה שישאיר חותם",
      imageUrl: "./images/services/barmitzvah.jpg",
      get slug() {
        return createServiceSlug(this.title);
      }
    },
    {
      id: 5,
      title: "חינה",
      description: "טקסי חינה מסורתיים בשילוב עיצוב מודרני",
      shortDescription: "חגיגת חינה מסורתית עם טוויסט מודרני לחוויה בלתי נשכחת",
      imageUrl: "./images/services/henna.jpg",
      get slug() {
        return createServiceSlug(this.title);
      }
    },
    {
      id: 6,
      title: "ברית",
      description: "אירועי ברית אינטימיים ומשמחים",
      shortDescription: "ברית מילה מסורתית ומכובדת עם כל הפרטים שחשובים לכם",
      imageUrl: "./images/services/brit.jpg",
      get slug() {
        return createServiceSlug(this.title);
      }
    }
  ]
};

export const contactData = {
  title: "צור קשר",
  subtitle: "אנחנו כאן כדי לענות על כל שאלה ולהפוך את החזון שלכם למציאות",
  address: "רחוב אלנבי 94, תל אביב",
  phone: "050-1234567",
  email: "info@themagicofevent.com",
  hours: {
    weekdays: "09:00-19:00",
    friday: "09:00-13:00",
    saturday: "סגור"
  },
  socialMedia: {
    facebook: "https://facebook.com/themagicofevent",
    instagram: "https://instagram.com/themagicofevent",
    whatsapp: "https://wa.me/972501234567"
  }
};

/* 
* Note: This is a placeholder for CMS data
* In a production environment, you would:
* 
* 1. Integrate with a headless CMS like Sanity, Strapi, or Contentful
* 2. Create API calls to fetch this data
* 3. Implement proper loading states and error handling
* 4. Consider caching strategies for performance
*
* Example of how you would fetch data from a CMS:
*
* export async function getHomeData() {
*   try {
*     // This would be replaced with your actual CMS API endpoint
*     const response = await fetch('https://your-cms-api.com/api/home');
*     const data = await response.json();
*     return data;
*   } catch (error) {
*     console.error('Error fetching home data:', error);
*     return null;
*   }
* }
*/ 