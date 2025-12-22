import { Link } from 'react-router-dom';

const PageTemplate = ({ 
  title, 
  children, 
  prevLink, 
  prevText, 
  nextLink, 
  nextText,
  showNavigation = true 
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 px-2 sm:px-0">{title}</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mx-2 sm:mx-0">
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          {children}
        </div>
        
        {showNavigation && (
          <div className="flex flex-col sm:flex-row justify-between mt-8 pt-6 border-t gap-4">
            {prevLink ? (
              <Link 
                to={prevLink} 
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-center text-sm sm:text-base"
              >
                ← {prevText}
              </Link>
            ) : (
              <div></div>
            )}
            
            {nextLink && (
              <Link 
                to={nextLink} 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center text-sm sm:text-base"
              >
                {nextText} →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageTemplate;