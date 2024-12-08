```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyComponent() {
  const router = useRouter();
  const [route, setRoute] = useState(router.asPath);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setRoute(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>      
      <Link href="/about">
        <a>About</a>
      </Link>
       <p>Current Route: {route}</p> 
    </div>
  );
}

export default MyComponent;
```