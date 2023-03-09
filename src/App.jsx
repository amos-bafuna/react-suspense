import { Suspense } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import ErrorBoundary from './ErrorBoundary';
import DoesAsynchronousThings from './DoesAsynchronousThings';

// The root of the app. It has an Error Boundary, a Suspense Boundary, and a
// component that demonstrates asynchronous loading.
export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<ScaleLoader color="#ff0" />}>
        <DoesAsynchronousThings />
      </Suspense>
    </ErrorBoundary>
  );
}
