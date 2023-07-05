import Root from "./app/screens";
import AppProvider from "./app/screens/Provider";

export default function App() {
  return (
    <AppProvider>
      <Root />
    </AppProvider>
  );
}
