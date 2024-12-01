/* eslint-disable */

import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


type Props = {};

const Navbar = (props: Props) => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");

    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
            {/* LEFT SIDE */}
            <FlexBetween gap="0.75rem">
                <CurrencyExchangeIcon sx={{ fontSize: "28px" }} />
                <Typography variant="h4" fontSize="16px">
                    Budgeting & Wellness Tool
                </Typography>
            </FlexBetween>

            {/* RIGHT SIDE */}
            <FlexBetween gap="2rem">

                {/* Financial Health Score Link */}
                <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                    <Link
                        to="/fin_health_score"
                        onClick={() => setSelected("fin_health_score")}
                        style={{
                            color: selected === "fin_health_score" ? "inherit" : palette.grey[700],
                            textDecoration: "inherit",
                        }}
                    >
                        Financial Health Score
                    </Link>
                </Box>

                {/* Dashboard Link */}
                <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                    <Link
                        to="/"
                        onClick={() => setSelected("dashboard")}
                        style={{
                            color: selected === "dashboard" ? "inherit" : palette.grey[700],
                            textDecoration: "inherit",
                        }}
                    >
                        Dashboard
                    </Link>
                </Box>

                {/* Manage Assets Link */}
                <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                    <Link
                        to="/portfolio_management"
                        onClick={() => setSelected("portfolio_management")}
                        style={{
                            color: selected === "portfolio_management" ? "inherit" : palette.grey[700],
                            textDecoration: "inherit",
                        }}
                    >
                        Portfolio Management
                    </Link>
                </Box>

            {/* Profile Link */}
<Box sx={{ "&:hover": { color: palette.primary[100] } }}>
    <Link
        to="/profilee"
        onClick={() => setSelected("profilee")}
        style={{
            color: selected === "profilee" ? "inherit" : palette.grey[700],
            textDecoration: "inherit",
            display: "flex",
            alignItems: "center", // Align icon and text
            gap: "0.5rem" // Space between icon and text
        }}
    >
        <AccountCircleIcon /> {/* Profile Icon */}
        Profile
    </Link>
</Box>


                
            </FlexBetween>
        </FlexBetween>
    );
};

export default Navbar;
