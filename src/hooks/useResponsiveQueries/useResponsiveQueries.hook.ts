import useMediaQuery from "../useMediaQuery";

import { UseResponsiveQueriesReturn } from './useResponsiveQueries.types'

const useResponsiveQueries = (): UseResponsiveQueriesReturn => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const isPortrait = useMediaQuery('(orientation: portrait)');

  return {
    isMobile,
    isTablet,
    isDesktop,
    isPortrait,
  };
};

export default useResponsiveQueries;
