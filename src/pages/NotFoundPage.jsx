import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logoImage from '../assets/images/לוגו עם סלוגן.png';

const NotFoundPage = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          py: 12,
          textAlign: 'center',
        }}
      >
        <Box
          component="img"
          src={logoImage}
          alt="הקסם באירוע - החגיגה שלכם, הקסם שלנו!"
          sx={{ height: 100, width: 'auto', mb: 4, display: 'block', mx: 'auto' }}
        />
        <Typography variant="h1" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'secondary.main' }}>
          העמוד לא נמצא
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          מצטערים, העמוד שחיפשת לא קיים או הוסר.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to="/"
          size="large"
          sx={{ mt: 2 }}
        >
          חזרה לעמוד הבית
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage; 