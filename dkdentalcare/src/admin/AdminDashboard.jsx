import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import Aktuality from '../components/Aktuality';

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  console.log("DemoPageContent pathname:", pathname); // Ladicí výstup pro sledování `pathname`

  switch (pathname) {
    case 'aktuality':
      return <Aktuality />;
    case 'cenik':
      return (
        <Box
          sx={{
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5">Editor pro Ceník</Typography>
        </Box>
      );
    case 'oteviraci-doba':
      return (
        <Box
          sx={{
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5">Editor pro Otevírací dobu</Typography>
        </Box>
      );
    default:
      return (
        <Box
          sx={{
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5">Vyberte sekci v navigaci</Typography>
        </Box>
      );
  }
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutNavigationDividers(props) {
  const { window } = props;

  const router = useDemoRouter('aktuality');

  console.log("Aktuální router pathname:", router.pathname); // Ladicí výstup pro sledování routeru

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={[
        {
          segment: 'aktuality',
          title: 'Aktuality',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'cenik',
          title: 'Ceník',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'oteviraci-doba',
          title: 'Otevírací doba',
          icon: <DescriptionIcon />,
        },
      ]}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutNavigationDividers.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutNavigationDividers;
