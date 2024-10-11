import { Header } from "./Header";
import { Footer } from "./Footer";

export const RiseLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};
