export interface Project {
  image: string;
  name: string;
  challenge: string;
  solution: string;
  link: string;
}

export interface SupportPlan {
    title: string;
    price: string;
    features: string[];
}

export interface Plan {
    name: string;
    description: string;
    price: string;
    originalPrice?: string;
    priceDetails?: string;
    features: string[];
    supportPlan?: SupportPlan;
    buttonText: string;
    recommended?: boolean;
    comingSoon?: boolean;
    whatsappMessage?: string;
}