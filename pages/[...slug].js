export async function getServerSideProps({ params }) {
  const { slug } = params;
  
  // Join the slug array into a path string
  const filePath = Array.isArray(slug) ? slug.join('/') : slug;
  
  // Construct the CDN URL
  const cdnUrl = `https://hc-cdn.hel1.your-objectstorage.com/s/v3/${filePath}`;
  
  // Perform server-side redirect
  return {
    redirect: {
      destination: cdnUrl,
      permanent: false, // Use 307 temporary redirect
    },
  };
}

// This component will never render due to the redirect
export default function Redirect() {
  return null;
}

