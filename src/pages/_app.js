import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-cream text-darkbrown min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
