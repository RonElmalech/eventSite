import { createServiceSlug } from '../utils/slugify';

/**
 * Service data with Hebrew text
 * Each service includes:
 * - id: unique identifier
 * - title: service name in Hebrew
 * - shortDescription: brief description for cards/previews
 * - description: full description for the service page
 * - features: list of service features
 * - process: steps involved in the service
 * - reasons: reasons to choose this service
 * - image: path to the main image
 * - galleryImages: array of paths to gallery images
 * - slug: URL-friendly version of the title
 */
const servicesData = [
  {
    id: 1,
    title: "חתונות",
    shortDescription: "הפכו את היום המיוחד שלכם לבלתי נשכח עם שירותי חתונה המותאמים אישית",
    description: "אנו מציעים שירותי הפקת חתונות מלאים המותאמים לחזון האישי שלכם. מהטקס ועד לקבלת הפנים, הצוות המקצועי שלנו דואג לכל פרט כדי להפוך את יום החתונה שלכם לחגיגה מושלמת.",
    features: [
      "תכנון וארגון מלא של האירוע",
      "עיצוב ייחודי ומותאם אישית",
      "תיאום עם כל הספקים",
      "ניהול לוחות זמנים מדויק",
      "פתרונות יצירתיים לכל תקציב"
    ],
    process: [
      {
        id: 1,
        title: "פגישת היכרות",
        description: "פגישת היכרות והבנת החזון שלכם"
      },
      {
        id: 2,
        title: "תכנון ראשוני",
        description: "הצעת רעיונות ותכנון ראשוני"
      },
      {
        id: 3,
        title: "בחירת מקום וספקים",
        description: "בחירת מקום ותיאום עם ספקים"
      },
      {
        id: 4,
        title: "תכנון מפורט",
        description: "תכנון מפורט ולוח זמנים"
      },
      {
        id: 5,
        title: "ניהול האירוע",
        description: "ניהול האירוע ביום החתונה"
      }
    ],
    reasons: [
      "ניסיון של שנים בהפקת חתונות מרהיבות",
      "גישה אישית ותשומת לב לפרטים",
      "רשת נרחבת של ספקים איכותיים",
      "פתרונות יצירתיים לכל אתגר",
      "ליווי צמוד מהרגע הראשון ועד סוף האירוע"
    ],
    image: `${baseUrl}/images/services/wedding.jpg`,
    galleryImages: [
      `${baseUrl}/images/gallery/wedding-1.jpg`,
      `${baseUrl}/images/gallery/wedding-2.jpg`,
      `${baseUrl}/images/gallery/wedding-3.jpg`,
      `${baseUrl}/images/gallery/wedding-4.jpg`
    ],
    get slug() {
      return createServiceSlug(this.title);
    }
  },
  {
    id: 2,
    title: "בר מצווה",
    shortDescription: "חגגו את הצעד המשמעותי הזה עם אירוע בר מצווה שישאיר חותם",
    description: "אירוע בר מצווה הוא ציון דרך משמעותי בחיי הילד והמשפחה. אנו מתמחים בתכנון והפקת אירועי בר מצווה שמשלבים מסורת וחדשנות, תוך יצירת חוויה בלתי נשכחת לחוגגים ולאורחים.",
    features: [
      "עיצוב אירוע בהתאמה אישית",
      "שילוב אלמנטים מסורתיים ומודרניים",
      "פעילויות מותאמות לבני הנוער והמבוגרים",
      "תיאום עם בית הכנסת ומקום האירוע",
      "מגוון אפשרויות בידור ואטרקציות"
    ],
    process: [
      {
        id: 1,
        title: "פגישת תכנון ראשונית",
        description: "פגישת תכנון ראשונית עם המשפחה והנער"
      },
      {
        id: 2,
        title: "גיבוש קונספט",
        description: "גיבוש קונספט וסגנון לאירוע"
      },
      {
        id: 3,
        title: "תיאום הטקס והמסיבה",
        description: "תיאום הטקס הדתי והמסיבה"
      },
      {
        id: 4,
        title: "הכנת לוח זמנים",
        description: "הכנת לוח זמנים מפורט"
      },
      {
        id: 5,
        title: "ניהול האירוע",
        description: "ניהול האירוע ביום בר המצווה"
      }
    ],
    reasons: [
      "הבנה עמוקה של המשמעות התרבותית והדתית",
      "יכולת יצירת אירוע שמתאים לכל הגילאים",
      "ניסיון בשילוב מסורת וחדשנות",
      "גישה רגישה לצרכים המיוחדים של הנער",
      "יצירת חוויה משפחתית משמעותית"
    ],
    image: `${baseUrl}/images/services/barmitzvah.jpg`,
    galleryImages: [
      `${baseUrl}/images/gallery/barmitzvah-1.jpg`,
      `${baseUrl}/images/gallery/barmitzvah-2.jpg`,
      `${baseUrl}/images/gallery/barmitzvah-3.jpg`,
      `${baseUrl}/images/gallery/barmitzvah-4.jpg`
    ],
    get slug() {
      return createServiceSlug(this.title);
    }
  },
  {
    id: 7,
    title: "בת מצווה",
    shortDescription: "חגגו את הצעד המשמעותי הזה עם אירוע בת מצווה שישאיר חותם",
    description: "אירוע בת מצווה הוא ציון דרך משמעותי בחיי הנערה והמשפחה. אנו מתמחים בתכנון והפקת אירועי בת מצווה שמשלבים מסורת וחדשנות, תוך יצירת חוויה בלתי נשכחת לחוגגת ולאורחים.",
    features: [
      "עיצוב אירוע בהתאמה אישית",
      "שילוב אלמנטים מסורתיים ומודרניים",
      "פעילויות מותאמות לבנות הנוער והמבוגרים",
      "תיאום עם מקום האירוע",
      "מגוון אפשרויות בידור ואטרקציות"
    ],
    process: [
      {
        id: 1,
        title: "פגישת תכנון ראשונית",
        description: "פגישת תכנון ראשונית עם המשפחה והנערה"
      },
      {
        id: 2,
        title: "גיבוש קונספט",
        description: "גיבוש קונספט וסגנון לאירוע"
      },
      {
        id: 3,
        title: "תיאום הטקס והמסיבה",
        description: "תיאום הטקס והמסיבה"
      },
      {
        id: 4,
        title: "הכנת לוח זמנים",
        description: "הכנת לוח זמנים מפורט"
      },
      {
        id: 5,
        title: "ניהול האירוע",
        description: "ניהול האירוע ביום בת המצווה"
      }
    ],
    reasons: [
      "הבנה עמוקה של המשמעות התרבותית והדתית",
      "יכולת יצירת אירוע שמתאים לכל הגילאים",
      "ניסיון בשילוב מסורת וחדשנות",
      "גישה רגישה לצרכים המיוחדים של הנערה",
      "יצירת חוויה משפחתית משמעותית"
    ],
    image: `${baseUrl}/images/services/barmitzvah.jpg`,
    galleryImages: [
      `${baseUrl}/images/gallery/barmitzvah-1.jpg`,
      `${baseUrl}/images/gallery/barmitzvah-2.jpg`,
      `${baseUrl}/images/gallery/barmitzvah-3.jpg`,
      `${baseUrl}/images/gallery/barmitzvah-4.jpg`
    ],
    get slug() {
      return createServiceSlug(this.title);
    }
  },
  {
    id: 3,
    title: "חינה",
    shortDescription: "חגיגת חינה מסורתית עם טוויסט מודרני לחוויה בלתי נשכחת",
    description: "טקס החינה הוא אירוע תרבותי עשיר בצבע, מוזיקה ומסורת. אנו מתמחים בעיצוב והפקת טקסי חינה שמכבדים את המסורת תוך שילוב אלמנטים עכשוויים ליצירת חוויה ייחודית.",
    features: [
      "עיצוב מרהיב בהשראת מסורות שונות",
      "טקס חינה אותנטי מותאם אישית",
      "תלבושות ואביזרים מסורתיים",
      "מוזיקה וריקודים תרבותיים",
      "מזון מסורתי ועכשווי"
    ],
    process: [
      {
        id: 1,
        title: "למידת המסורות",
        description: "למידת המסורות המשפחתיות הספציפיות"
      },
      {
        id: 2,
        title: "תכנון הטקס",
        description: "תכנון הטקס והמסיבה"
      },
      {
        id: 3,
        title: "עיצוב החלל",
        description: "עיצוב החלל ובחירת צבעוניות"
      },
      {
        id: 4,
        title: "תיאום אמנים",
        description: "תיאום עם אמני חינה ומוזיקאים"
      },
      {
        id: 5,
        title: "ארגון תלבושות",
        description: "ארגון התלבושות והאביזרים"
      }
    ],
    reasons: [
      "כבוד עמוק למסורות תרבותיות",
      "יכולת שילוב אלמנטים מודרניים",
      "היכרות עם מגוון סגנונות ומנהגים",
      "קשרים עם אמני חינה מובילים",
      "יצירת אווירה אותנטית וחגיגית"
    ],
    image: `${baseUrl}/images/services/henna.jpg`,
    galleryImages: [
      `${baseUrl}/images/gallery/henna-1.jpg`,
      `${baseUrl}/images/gallery/henna-2.jpg`,
      `${baseUrl}/images/gallery/henna-3.jpg`,
      `${baseUrl}/images/gallery/henna-4.jpg`
    ],
    get slug() {
      return createServiceSlug(this.title);
    }
  },
  {
    id: 4,
    title: "ימי הולדת",
    shortDescription: "הפקת ימי הולדת מיוחדים לכל גיל עם רעיונות יצירתיים",
    description: "יום הולדת הוא הזדמנות נפלאה לחגוג ולשמוח. אנו מציעים שירותי הפקת ימי הולדת לכל גיל - מילדים ועד מבוגרים, עם רעיונות ייחודיים שהופכים כל חגיגה לבלתי נשכחת.",
    features: [
      "נושאים ועיצובים מותאמים אישית",
      "פעילויות ובידור לכל גיל",
      "עוגות וקינוחים מעוצבים",
      "הזמנות ומזכרות מיוחדות",
      "פתרונות לכל תקציב ומספר אורחים"
    ],
    process: [
      {
        id: 1,
        title: "בחירת נושא",
        description: "בחירת נושא וקונספט"
      },
      {
        id: 2,
        title: "תכנון פעילויות",
        description: "תכנון פעילויות ובידור"
      },
      {
        id: 3,
        title: "עיצוב והזמנות",
        description: "עיצוב ההזמנות והמקום"
      },
      {
        id: 4,
        title: "תיאום ספקים",
        description: "תיאום עם ספקי מזון ועוגות"
      },
      {
        id: 5,
        title: "ניהול האירוע",
        description: "ארגון וניהול האירוע"
      }
    ],
    reasons: [
      "ניסיון ביצירת אירועים לכל גיל",
      "רעיונות ייחודיים שיתאימו לכל תקציב",
      "שיתוף פעולה עם מגוון אמנים ואטרקציות",
      "יכולת התאמה לכל נושא וסגנון",
      "חוויית יום הולדת מרגשת וזכירה"
    ],
    image: `${baseUrl}/images/services/birthday.jpg`,
    galleryImages: [
      `${baseUrl}/images/gallery/birthday-1.jpg`,
      `${baseUrl}/images/gallery/birthday-2.jpg`,
      `${baseUrl}/images/gallery/birthday-3.jpg`,
      `${baseUrl}/images/gallery/birthday-4.jpg`
    ],
    get slug() {
      return createServiceSlug(this.title);
    }
  },
  {
    id: 5,
    title: "ברית",
    shortDescription: "ברית מילה מסורתית ומכובדת עם כל הפרטים שחשובים לכם",
    description: "ברית מילה היא אירוע בעל משמעות דתית ומשפחתית עמוקה. אנו מתמחים בתכנון והפקת בריתות שמכבדות את המסורת והדת, תוך הקפדה על כל הפרטים הקטנים שהופכים את היום למושלם.",
    features: [
      "תיאום עם מוהל מוסמך ואמין",
      "ארגון הטקס הדתי המסורתי",
      "סידורי האירוח והסעודה",
      "עיצוב מכובד ומותאם לאופי האירוע",
      "תיעוד האירוע בצילום ווידאו"
    ],
    process: [
      {
        id: 1,
        title: "פגישת תכנון",
        description: "פגישת תכנון עם ההורים"
      },
      {
        id: 2,
        title: "תיאום דתי",
        description: "תיאום עם המוהל ובית הכנסת"
      },
      {
        id: 3,
        title: "ארגון הסעודה",
        description: "ארגון הסעודה והכיבוד"
      },
      {
        id: 4,
        title: "הכנת המרחב",
        description: "הכנת המרחב לטקס ולאירוח"
      },
      {
        id: 5,
        title: "ניהול האירוע",
        description: "ניהול האירוע ביום הברית"
      }
    ],
    reasons: [
      "ניסיון בארגון אירועי ברית",
      "הבנה עמוקה של הטקס והמסורת",
      "רגישות לצרכי התינוק והמשפחה",
      "תיאום מושלם בין המוהל וכלל הספקים",
      "התחשבות בנוחות האורחים"
    ],
    image: `${baseUrl}/images/services/brit.jpg`,
    galleryImages: [
      `${baseUrl}/images/gallery/brit-1.jpg`,
      `${baseUrl}/images/gallery/brit-2.jpg`,
      `${baseUrl}/images/gallery/brit-3.jpg`,
      `${baseUrl}/images/gallery/brit-4.jpg`
    ],
    get slug() {
      return createServiceSlug(this.title);
    }
  },
  {
    id: 6,
    title: "אירועים עסקיים",
    shortDescription: "אירועים עסקיים מקצועיים שמשאירים רושם ומשיגים את המטרות שלכם",
    description: "אירועים עסקיים דורשים תכנון קפדני והבנה של המטרות העסקיות. אנו מציעים שירותי הפקת אירועים עסקיים מגוונים - מכנסים וימי עיון ועד אירועי השקה ואירועי חברה, עם דגש על מקצועיות ותשומת לב לפרטים.",
    features: [
      "תכנון בהתאם למטרות העסקיות",
      "לוגיסטיקה מורכבת וניהול זמנים",
      "מיתוג האירוע והתאמה לזהות החברה",
      "טכנולוגיה ואמצעי מדיה מתקדמים",
      "תיאום עם מרצים ומציגים"
    ],
    process: [
      {
        id: 1,
        title: "הבנת המטרות",
        description: "הבנת המטרות והיעדים העסקיים"
      },
      {
        id: 2,
        title: "תכנון פורמט",
        description: "תכנון האירוע והפורמט המתאים"
      },
      {
        id: 3,
        title: "ארגון לוגיסטי",
        description: "ארגון המקום, הציוד והלוגיסטיקה"
      },
      {
        id: 4,
        title: "תיאום תוכן",
        description: "תיאום עם מרצים, מציגים וספקים"
      },
      {
        id: 5,
        title: "ניהול והפקה",
        description: "ניהול האירוע והפקת לקחים"
      }
    ],
    reasons: [
      "ניסיון נרחב בהפקת אירועים עסקיים",
      "הבנה של צרכי התדמית והמסר העסקי",
      "פתרונות לוגיסטיים יעילים",
      "תיאום עם מרצים ומנחים מקצועיים",
      "תשומת לב לאפקטיביות וערך מוסף"
    ],
    image: `${baseUrl}/images/services/business.jpg`,
    galleryImages: [
      `${baseUrl}/images/gallery/business-1.jpg`,
      `${baseUrl}/images/gallery/business-2.jpg`,
      `${baseUrl}/images/gallery/business-3.jpg`,
      `${baseUrl}/images/gallery/business-4.jpg`
    ],
    get slug() {
      return createServiceSlug(this.title);
    }
  }
];

// Get the base URL for assets based on environment
const baseUrl = import.meta.env.MODE === 'production' ? '/TheMagicOfTheEvent' : '';

/**
 * Get all services
 * @returns {Array} Array of all services
 */
export const getAllServices = () => {
  return servicesData;
};

/**
 * Get a service by its slug
 * @param {string} slug - The slug of the service
 * @returns {Object|null} The service object or null if not found
 */
export const getServiceBySlug = (slug) => {
  console.log('getServiceBySlug called with:', slug);
  
  // Compute and log all service slugs for comparison
  const allSlugs = servicesData.map(service => ({
    title: service.title,
    id: service.id,
    slug: service.slug,
  }));
  console.log('Available slugs:', allSlugs);
  
  // Find the service with matching slug
  const foundService = servicesData.find(service => service.slug === slug);
  console.log('Found service:', foundService ? {
    title: foundService.title,
    id: foundService.id,
    slug: foundService.slug
  } : 'Not found');
  
  return foundService || null;
};

/**
 * Get a service by its ID
 * @param {number} id - The ID of the service
 * @returns {Object|null} The service object or null if not found
 */
export const getServiceById = (id) => {
  return servicesData.find(service => service.id === id) || null;
}; 