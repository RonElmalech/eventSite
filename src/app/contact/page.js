import React from 'react';
import ContactForm from '../../components/ContactForm';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, 
  Divider
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const metadata = {
  title: 'צור קשר - הקסם של האירוע',
  description: 'צרו איתנו קשר כדי להתחיל לתכנן את האירוע המושלם שלכם',
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <Container className="max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Typography variant="h2" component="h1" className="text-4xl md:text-5xl font-bold mb-4">
            צרו איתנו קשר
          </Typography>
          <Typography variant="h6" className="text-xl text-gray-600 max-w-2xl mx-auto">
            אנחנו כאן כדי לענות על כל שאלה ולהפוך את החזון שלכם למציאות. מלאו את הטופס או צרו קשר ישירות.
          </Typography>
        </div>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper className="p-6 md:p-8 rounded-xl shadow-lg">
              <Typography variant="h4" component="h2" className="text-2xl font-bold mb-6">
                השאירו פרטים ונחזור אליכם בהקדם
              </Typography>
              <ContactForm />
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <div className="space-y-6">
              {/* Direct Contact Card */}
              <Card className="rounded-xl shadow-lg overflow-hidden">
                <Box className="bg-blue-600 py-4 px-6">
                  <Typography variant="h5" component="h3" className="text-white font-bold">
                    פרטי התקשרות
                  </Typography>
                </Box>
                <CardContent className="px-6 py-5">
                  <List disablePadding>
                    <ListItem className="px-0 py-3">
                      <ListItemIcon>
                        <PhoneIcon className="text-blue-600" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <a 
                            href="tel:+972501234567" 
                            className="text-lg hover:text-blue-600 transition-colors"
                          >
                            050-1234567
                          </a>
                        } 
                        secondary="זמין בימים א'-ה'" 
                      />
                    </ListItem>
                    <Divider />
                    <ListItem className="px-0 py-3">
                      <ListItemIcon>
                        <WhatsAppIcon className="text-green-600" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <a 
                            href="https://wa.me/972501234567" 
                            className="text-lg hover:text-green-600 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            שלחו הודעת WhatsApp
                          </a>
                        } 
                        secondary="מענה מהיר לשאלות" 
                      />
                    </ListItem>
                    <Divider />
                    <ListItem className="px-0 py-3">
                      <ListItemIcon>
                        <EmailIcon className="text-red-600" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <a 
                            href="mailto:info@themagicofevent.com" 
                            className="text-lg hover:text-red-600 transition-colors"
                          >
                            info@themagicofevent.com
                          </a>
                        }
                        secondary="אימייל לפניות ובקשות" 
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>

              {/* Hours Card */}
              <Card className="rounded-xl shadow-lg overflow-hidden">
                <Box className="bg-gray-800 py-4 px-6">
                  <Typography variant="h5" component="h3" className="text-white font-bold">
                    שעות פעילות
                  </Typography>
                </Box>
                <CardContent className="px-6 py-5">
                  <List disablePadding>
                    <ListItem className="px-0 py-2">
                      <ListItemIcon>
                        <AccessTimeIcon className="text-gray-600" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="ימים א'-ה'" 
                        secondary="9:00 - 19:00" 
                      />
                    </ListItem>
                    <ListItem className="px-0 py-2">
                      <ListItemIcon>
                        <AccessTimeIcon className="text-gray-600" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="יום ו'" 
                        secondary="9:00 - 13:00" 
                      />
                    </ListItem>
                    <ListItem className="px-0 py-2">
                      <ListItemIcon>
                        <AccessTimeIcon className="text-gray-600" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="שבת" 
                        secondary="סגור" 
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="rounded-xl shadow-lg overflow-hidden">
                <Box className="bg-green-600 py-4 px-6">
                  <Typography variant="h5" component="h3" className="text-white font-bold">
                    מיקום המשרד
                  </Typography>
                </Box>
                <CardContent className="px-6 py-5">
                  <ListItem className="px-0 py-2">
                    <ListItemIcon>
                      <PlaceIcon className="text-green-600" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="רחוב אלנבי 94, תל אביב" 
                      secondary="קומה 3, משרד 320" 
                    />
                  </ListItem>
                  <Box className="mt-4 rounded-lg overflow-hidden shadow border border-gray-200">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.069435271863!2d34.7708833!3d32.0679178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c7bef809e01%3A0x5be28d7547aac6a!2z15DXnNeR15kgOTQsINeq15wg15DXkdeZ15E!5e0!3m2!1siw!2sil!4v1688457295825!5m2!1siw!2sil" 
                      width="100%" 
                      height="200" 
                      style={{ border: 0 }}
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="מפת המשרד"
                    ></iframe>
                  </Box>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
} 