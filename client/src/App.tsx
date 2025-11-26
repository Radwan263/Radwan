import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Quran from "@/pages/Quran";
import Adhkar from "@/pages/Adhkar";
import Rosary from "@/pages/Rosary";
import Asma from "@/pages/Asma";
import Hadith from "@/pages/Hadith";
import Duas from "@/pages/Duas";
import Charity from "@/pages/Charity";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/quran"} component={Quran} />
      <Route path={"/adhkar"} component={Adhkar} />
      <Route path={"/rosary"} component={Rosary} />
      <Route path={"/asma"} component={Asma} />
      <Route path={"/hadith"} component={Hadith} />
      <Route path={"/duas"} component={Duas} />
      <Route path={"/charity"} component={Charity} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
