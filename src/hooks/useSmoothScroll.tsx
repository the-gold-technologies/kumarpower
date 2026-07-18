import { useEffect } from 'react';

/**
 * Hook to enable smooth scrolling for anchor links
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    // Function to handle smooth scrolling when clicking anchor links
    const handleSmoothScroll = (event: MouseEvent) => {
      // Check if the clicked element is an anchor link
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link) return;
      
      // Check if the link is an in-page anchor link
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;
      
      // Get the target element
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      // If target element exists, scroll to it smoothly
      if (targetElement) {
        event.preventDefault();
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // 80px offset for any fixed headers
          behavior: 'smooth'
        });
        
        // Update the URL without refreshing the page
        window.history.pushState(null, '', href);
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleSmoothScroll);
    
    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);
};
