import { getServiceBySlug, getAllServices } from '../../../data/services';
import ServicePage from '../../../components/ServicePage';
import { notFound } from 'next/navigation';

// Generate static params for all services
export function generateStaticParams() {
  const services = getAllServices();
  return services.map(service => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: 'שירות לא נמצא - הקסם של האירוע',
      description: 'השירות המבוקש לא נמצא',
    };
  }
  
  return {
    title: `${service.title} - הקסם של האירוע`,
    description: service.shortDescription,
  };
}

// Main component for the service page
export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  
  // If service not found, return 404
  if (!service) {
    notFound();
  }
  
  // Convert features to process format if needed
  if (service.features && !service.process) {
    service.process = service.features.map((feature, index) => ({
      id: index + 1,
      title: `שלב ${index + 1}`,
      description: feature
    }));
  }
  
  // Convert reasons to advantages format if needed
  if (service.reasons && !service.advantages) {
    service.advantages = service.reasons;
  }
  
  return <ServicePage service={service} />;
} 