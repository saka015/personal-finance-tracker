
 /* eslint-disable */

import { Box, CssBaseline , dividerClasses, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import  Dashboard  from "@/scenes/dashboard";
import PortfolioManagement from "./scenes/porfolio_management";
import Profilee from "./scenes/profilee";
// import HealthScore from "./scenes/fin_health_score";


function App() {
  const theme = useMemo(() =>createTheme(themeSettings) , [])

  return <div className="app">
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard/> } />
          <Route path="/portfolio_management" element={ <PortfolioManagement/>} />
          <Route path="/fin_health_score" element={ <div>health HealthScore</div> } />
          <Route path="/profilee" element={ <Profilee/> } />

          </Routes>

      </Box>
    </ThemeProvider>
  </BrowserRouter>
  </div>  
}

export default App;
