// Utility para rastreamento do Google Analytics + Vercel Analytics

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

// Helper para enviar para ambos os sistemas
const sendToAnalytics = (eventName: string, properties: Record<string, any>) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
  
  // Vercel Analytics (eventos customizados)
  if (typeof window !== 'undefined' && window.va) {
    try {
      // @ts-ignore - Vercel Analytics aceita eventos customizados
      window.va('event', { name: eventName, data: properties });
    } catch (e) {
      // Silently fail se Vercel Analytics não estiver disponível
    }
  }
};

// Rastrear visualização de página
export const trackPageView = (pageName: string, pageTitle: string) => {
  const properties = {
    page_title: pageTitle,
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    page_path: `/${pageName}`,
  };
  
  sendToAnalytics('page_view', properties);
  console.log('📊 Analytics Page View:', { pageName, pageTitle });
};

// Rastrear cliques em botões/CTAs
export const trackButtonClick = (buttonName: string, buttonLocation: string, destination?: string) => {
  const properties = {
    event_category: 'engagement',
    event_label: buttonName,
    button_location: buttonLocation,
    destination: destination || 'none',
  };
  
  sendToAnalytics('button_click', properties);
  console.log('📊 Analytics Button Click:', { buttonName, buttonLocation, destination });
};

// Rastrear cliques em WhatsApp
export const trackWhatsAppClick = (origin: string, message: string) => {
  const properties = {
    event_category: 'conversion',
    event_label: `WhatsApp from ${origin}`,
    message_type: message.substring(0, 50),
  };
  
  sendToAnalytics('whatsapp_click', properties);
  console.log('📊 Analytics WhatsApp Click:', { origin, message });
};

// Rastrear interesse em planos
export const trackPlanInterest = (planName: string, planPrice: string, action: string) => {
  const properties = {
    event_category: 'conversion',
    event_label: planName,
    plan_price: planPrice,
    action: action,
  };
  
  sendToAnalytics('plan_interest', properties);
  console.log('📊 Analytics Plan Interest:', { planName, planPrice, action });
};

// Rastrear scroll depth (profundidade de rolagem)
export const trackScrollDepth = (percentage: number, pageName: string) => {
  const properties = {
    event_category: 'engagement',
    event_label: `${percentage}% on ${pageName}`,
    scroll_percentage: percentage,
    page: pageName,
  };
  
  sendToAnalytics('scroll_depth', properties);
  console.log('📊 Analytics Scroll Depth:', { percentage, pageName });
};

// Rastrear abertura de FAQ
export const trackFAQInteraction = (question: string, action: 'open' | 'close') => {
  const properties = {
    event_category: 'engagement',
    event_label: question,
    action: action,
  };
  
  sendToAnalytics('faq_interaction', properties);
  console.log('📊 Analytics FAQ Interaction:', { question, action });
};

// Rastrear cliques em projetos do portfólio
export const trackPortfolioClick = (projectName: string, projectLink: string) => {
  const properties = {
    event_category: 'engagement',
    event_label: projectName,
    project_link: projectLink,
  };
  
  sendToAnalytics('portfolio_click', properties);
  console.log('📊 Analytics Portfolio Click:', { projectName, projectLink });
};

// Rastrear navegação entre páginas
export const trackNavigation = (from: string, to: string, method: string) => {
  const properties = {
    event_category: 'navigation',
    event_label: `${from} -> ${to}`,
    navigation_from: from,
    navigation_to: to,
    navigation_method: method,
  };
  
  sendToAnalytics('navigation', properties);
  console.log('📊 Analytics Navigation:', { from, to, method });
};

// Rastrear tempo na página (quando o usuário sair)
export const trackTimeOnPage = (pageName: string, seconds: number) => {
  const properties = {
    event_category: 'engagement',
    event_label: pageName,
    time_seconds: seconds,
    time_minutes: Math.round(seconds / 60),
  };
  
  sendToAnalytics('time_on_page', properties);
  console.log('📊 Analytics Time on Page:', { pageName, seconds });
};

// Rastrear cliques em links externos
export const trackExternalLink = (url: string, linkText: string) => {
  const properties = {
    event_category: 'engagement',
    event_label: linkText,
    destination_url: url,
  };
  
  sendToAnalytics('external_link', properties);
  console.log('📊 Analytics External Link:', { url, linkText });
};

// Rastrear conversões (formulários, pagamentos)
export const trackConversion = (conversionType: string, value?: string) => {
  const properties = {
    event_category: 'conversion',
    event_label: conversionType,
    conversion_value: value || 'none',
  };
  
  sendToAnalytics('conversion', properties);
  console.log('📊 Analytics Conversion:', { conversionType, value });
};
