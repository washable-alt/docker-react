const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Cumulative Layout Shift - Measures visual stability - 0.1 or less
      getCLS(onPerfEntry);
      // First input delay - Interactivity - 100 milliseconds or less
      getFID(onPerfEntry);
      // First Contentful Paint - Measures loading performance of web elements - less than 1.8 seconds 
      getFCP(onPerfEntry);
      // Largest Contentful Paint - Measures loading performance - less than 2.5 seconds
      getLCP(onPerfEntry);
      // TimeToFirstByte - Requesting request to first byte response - less than 800 milliseconds
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
